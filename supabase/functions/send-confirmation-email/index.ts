
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConfirmationEmailRequest {
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  customer_company?: string;
  product_type: string;
  product_price: number;
  quantity: number;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
};

const getProductDisplayName = (productType: string) => {
  switch (productType) {
    case 'HB8':
      return 'LÖWEN DARTAUTOMAT HB8';
    case 'HB10':
      return 'LÖWEN DARTAUTOMAT HB10 DART ROT-BLAU (V4)';
    default:
      return `LÖWEN DARTAUTOMAT ${productType}`;
  }
};

const generateEmailHTML = (data: ConfirmationEmailRequest) => {
  const productName = getProductDisplayName(data.product_type);
  const totalPrice = formatPrice(data.product_price);
  const unitPrice = formatPrice(data.product_price / data.quantity);
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bestätigung Ihrer Anfrage</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; color: #475569;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #002454 0%, #1e40af 100%); color: #002454; padding: 40px 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold; letter-spacing: -0.025em; color: #002454;">
              LÖWEN VERTRIEB
            </h1>
            <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.8; color: #002454;">
              Bestätigung Ihrer Anfrage
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px;">
            
            <!-- Greeting -->
            <div style="margin-bottom: 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 600; color: #1e293b;">
                Hallo ${data.customer_name},
              </h2>
              <p style="margin: 0; line-height: 1.6; color: #475569;">
                vielen Dank für Ihr Interesse an unseren LÖWEN Dartautomaten. Wir haben Ihre Anfrage erfolgreich erhalten und werden uns in Kürze bei Ihnen melden.
              </p>
            </div>

            <!-- Order Details -->
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 24px; margin-bottom: 32px; border-left: 4px solid #002454;">
              <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1e293b;">
                Details Ihrer Anfrage
              </h3>
              
              <div style="margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span style="font-weight: 500; color: #374151;">Produkt:</span>
                  <span style="color: #002454; font-weight: 600;">${productName}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span style="font-weight: 500; color: #374151;">Einzelpreis:</span>
                  <span style="color: #475569;">${unitPrice}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span style="font-weight: 500; color: #374151;">Menge:</span>
                  <span style="color: #475569;">${data.quantity}x</span>
                </div>
                ${data.customer_company ? `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span style="font-weight: 500; color: #374151;">Unternehmen:</span>
                  <span style="color: #475569;">${data.customer_company}</span>
                </div>
                ` : ''}
                <div style="border-top: 1px solid #e2e8f0; margin: 12px 0; padding-top: 12px;">
                  <div style="display: flex; justify-content: space-between;">
                    <span style="font-weight: 600; color: #1e293b; font-size: 16px;">Gesamtpreis:</span>
                    <span style="color: #002454; font-weight: 700; font-size: 16px;">${totalPrice}</span>
                  </div>
                  <div style="text-align: right; margin-top: 4px;">
                    <span style="font-size: 12px; color: #64748b;">inkl. 19% MwSt.</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Next Steps -->
            <div style="background-color: #f0f9ff; border-radius: 8px; padding: 24px; margin-bottom: 32px; border-left: 4px solid #0ea5e9;">
              <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600; color: #1e293b;">
                Wie geht es weiter?
              </h3>
              <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #475569;">
                <li style="margin-bottom: 8px;">Wir prüfen Ihre Anfrage und erstellen Ihnen ein individuelles Angebot</li>
                <li style="margin-bottom: 8px;">Sie erhalten innerhalb von 24 Stunden eine persönliche Rückmeldung</li>
                <li style="margin-bottom: 8px;">Gerne beraten wir Sie auch telefonisch zu allen Details</li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #1e293b;">
                Ihre Kontaktdaten:
              </h4>
              <div style="font-size: 14px; color: #475569; line-height: 1.5;">
                <div><strong>E-Mail:</strong> ${data.customer_email}</div>
                ${data.customer_phone ? `<div><strong>Telefon:</strong> ${data.customer_phone}</div>` : ''}
              </div>
            </div>

            <!-- Footer Message -->
            <div style="text-align: center; color: #64748b; font-size: 14px; line-height: 1.6;">
              <p style="margin: 0 0 8px 0;">
                Bei Fragen können Sie sich gerne jederzeit an uns wenden.
              </p>
              <p style="margin: 0; font-weight: 500;">
                Vielen Dank für Ihr Vertrauen!
              </p>
            </div>

          </div>

          <!-- Footer -->
          <div style="background-color: #1e293b; color: #94a3b8; padding: 24px 30px; text-align: center;">
            <div style="margin-bottom: 16px;">
              <h4 style="margin: 0 0 8px 0; color: #f1f5f9; font-size: 16px; font-weight: 600;">
                LÖWEN VERTRIEB
              </h4>
              <p style="margin: 0; font-size: 14px;">
                Ihr Partner für professionelle Dartautomaten
              </p>
            </div>
            
            <div style="border-top: 1px solid #334155; padding-top: 16px; font-size: 12px;">
              <p style="margin: 0;">
                E-Mail: info@loewen-vertrieb.de
              </p>
            </div>
          </div>

        </div>
      </body>
    </html>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const emailData: ConfirmationEmailRequest = await req.json();

    console.log("Sending confirmation email to:", emailData.customer_email);

    const productName = getProductDisplayName(emailData.product_type);
    const emailHTML = generateEmailHTML(emailData);

    const emailResponse = await resend.emails.send({
      from: "Löwen Vertrieb <info@loewen-vertrieb.de>",
      to: [emailData.customer_email],
      subject: `Bestätigung Ihrer Anfrage - ${productName}`,
      html: emailHTML,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
