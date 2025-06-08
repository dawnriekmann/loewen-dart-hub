
const HB10Section = () => {
  return (
    <section className="py-0 relative">
      {/* Blue background header - larger height */}
      <div className="relative w-full h-[400px] bg-[#002454] overflow-hidden">
        <div className="container mx-auto px-4 h-full relative">
          {/* Title box positioned over the image area */}
          <div className="absolute right-8 top-16 z-20">
            <div 
              className="flex items-center justify-center mb-6 shadow-lg"
              style={{ 
                width: '320px', 
                height: '100px', 
                backgroundColor: '#638fc6' 
              }}
            >
              <h2 className="text-white font-bold text-2xl text-center">
                LÖWEN DART HB10
              </h2>
            </div>
            <div className="bg-white p-4 shadow-lg max-w-xs">
              <p className="text-[#002454] text-lg font-semibold">
                EINE NEUE ÄRA DES ELECTRONIC DARTS.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HB10 Image positioned to overlap both sections */}
      <div className="absolute left-8 top-32 z-10">
        <div className="bg-white p-4 shadow-2xl">
          <img 
            src="https://www.loewen.de/fileadmin/user_upload/Dart-HB10-092024.jpg" 
            alt="LÖWEN DART HB10"
            className="object-cover"
            style={{ width: '660px', height: '305px' }}
          />
        </div>
      </div>

      {/* Content section with top padding to account for overlapping image */}
      <div className="bg-slate-50 pt-80 pb-20">
        <div className="container mx-auto px-4">
          {/* Main title and description */}
          <div className="mb-16 ml-8">
            <div className="bg-white p-8 shadow-lg max-w-4xl">
              <h2 className="text-4xl font-bold text-[#002454] mb-8">
                Das neue Erfolgsmodell - jetzt noch besser.
              </h2>
              <p className="text-lg text-[#002454]">
                Der LÖWEN DART HB10 ist die innovative Weiterentwicklung der bisherigen Erfolgsmodelle von LÖWEN ENTERTAINMENT. Mit vielen verschiedenen Spielmodi, einem Touchpad und dem hochauflösenden Monitor bringt der HB10 den elektronischen Dartsport in das Hier und Jetzt. Und das alles im unverwechselbaren LÖWEN DART-Design.
              </p>
            </div>
          </div>

          {/* Highlights white box */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-16 max-w-4xl mx-auto transform rotate-1">
            <div className="flex items-center mb-6">
              <img 
                src="https://www.loewen.de/fileadmin/_processed_/4/8/csm_Dart_HB_10_Logo_klein_407a328601.png" 
                alt="LÖWEN DART HB10 Logo"
                className="mr-4"
              />
              <h3 className="text-2xl font-bold text-[#002454]">Highlights</h3>
            </div>
            <ul className="text-[#002454] space-y-2">
              <li>• Offizielles DSAB-Liga- und Turniergerät</li>
              <li>• Hochauflösender 23,8-Zoll-Monitor und ein 12,1-Zoll-Touchpad</li>
              <li>• Bewährtes Treffererkennungssystem</li>
              <li>• Perfekte Ausleuchtung des Targets durch LED</li>
              <li>• Hochleistungsprozessor und integrierter Banknotenprüfer</li>
              <li>• In den Farbvarianten blau sowie rot-blau erhältlich</li>
              <li>• WLAN-Funktionalität (durch externen WLAN-Stick)</li>
              <li>• App-Anmeldung über QR-Code im Spielermenü</li>
              <li>• 5 Sprachen wählbar: Deutsch, Englisch, Spanisch, Französisch und Italienisch</li>
              <li>• Maße (H x B x T in cm): 236* x 62 x 60, Gewicht: 105 kg</li>
            </ul>
          </div>

          {/* Games and Options section */}
          <div className="mb-16">
            <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto transform -rotate-1 mb-8">
              <h3 className="text-3xl font-bold text-[#002454] mb-4">
                Spiele und Optionen
              </h3>
              <p className="text-lg text-[#002454]">
                Das LÖWEN DART HB10 bietet ab der neuen V4 insgesamt 15 Spielvarianten, fünf Trainingsspiele sowie zahlreiche Spieloptionen inkl. flexiblen Teamspielmöglichkeiten.
              </p>
            </div>
            <div className="max-w-6xl mx-auto mb-8">
              <div className="bg-white p-4 shadow-xl transform rotate-1">
                <img 
                  src="https://www.loewen.de/fileadmin/user_upload/Erlauterung-Menue-Dart-V4-102024.png" 
                  alt="LÖWEN DART Menu Explanation"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* HB10 Monitorkit section */}
          <div className="mb-16">
            <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto mb-8">
              <h3 className="text-3xl font-bold text-[#002454]">
                HB10 - Monitorkit
              </h3>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white p-4 shadow-xl transform -rotate-1">
                <img 
                  src="https://www.loewen.de/fileadmin/user_upload/Dart-Banner-HB10-Monitorkit_092024.png" 
                  alt="LÖWEN DART HB10 Monitorkit"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Two columns with download items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 shadow-lg transform rotate-1">
              <div className="flex items-center space-x-2">
                <div 
                  className="flex-shrink-0"
                  style={{ 
                    width: '12px', 
                    height: '135px', 
                    backgroundColor: '#638ec5' 
                  }}
                />
                <img 
                  src="https://www.loewen.de/fileadmin/user_upload/Deckblatt_Flyer_DE.PNG" 
                  alt="Produktflyer"
                  className="flex-shrink-0"
                  style={{ width: '95px', height: '135px' }}
                />
                <div className="flex flex-col text-left">
                  <h4 className="text-lg text-[#002454] mb-1">
                    Produktflyer
                  </h4>
                  <p className="text-xl font-bold text-[#002454] mb-2">
                    LÖWEN DART HB10
                  </p>
                  <p className="text-lg font-bold text-[#002454] cursor-pointer hover:underline">
                    Zum E-Paper
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-lg transform -rotate-1">
              <div className="flex items-center space-x-2">
                <div 
                  className="flex-shrink-0"
                  style={{ 
                    width: '12px', 
                    height: '135px', 
                    backgroundColor: '#638ec5' 
                  }}
                />
                <img 
                  src="https://www.loewen.de/fileadmin/user_upload/Produktwelt/Dart/Titel_Handbuch_199x262.jpg" 
                  alt="Benutzerhandbuch"
                  className="flex-shrink-0"
                  style={{ width: '95px', height: '135px' }}
                />
                <div className="flex flex-col text-left">
                  <h4 className="text-lg text-[#002454] mb-1">
                    Benutzerhandbuch
                  </h4>
                  <p className="text-xl font-bold text-[#002454] mb-2">
                    LÖWEN DART
                  </p>
                  <p className="text-lg text-[#002454] mb-2">
                    HB10
                  </p>
                  <p className="text-lg font-bold text-[#002454] cursor-pointer hover:underline">
                    Zum Downloadbereich
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom text section */}
          <div className="text-center">
            <div className="bg-white p-6 shadow-lg max-w-2xl mx-auto">
              <p className="text-lg text-[#002454] mb-4">
                Weitere Inhalte stehen für Sie in unserem Downloadbereich zur Verfügung!
              </p>
              
              <a 
                href="https://www.loewen-kundenportal.de/downloadbereich/produktinformationen/dart-soccer?utm_source=website&utm_medium=link&utm_campaign=downloadbereich&utm_content=dart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-[#002454] cursor-pointer hover:underline"
              >
                Zum Downloadbereich
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HB10Section;
