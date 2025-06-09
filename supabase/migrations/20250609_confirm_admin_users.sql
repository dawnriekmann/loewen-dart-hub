
-- Function to confirm admin users automatically
CREATE OR REPLACE FUNCTION public.confirm_admin_users()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Update any admin users to be confirmed
  UPDATE auth.users 
  SET email_confirmed_at = now(),
      phone_confirmed_at = now()
  WHERE id IN (
    SELECT p.id 
    FROM public.profiles p 
    WHERE p.role = 'admin'
  ) AND email_confirmed_at IS NULL;
END;
$$;

-- Run the function to confirm existing admin users
SELECT public.confirm_admin_users();
