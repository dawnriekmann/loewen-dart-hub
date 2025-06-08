const HB10Section = () => {
  return (
    <section className="py-0 relative overflow-x-hidden">
      {/* Blue background header - larger height */}
      <div className="relative w-full h-[400px] bg-[#002454] overflow-hidden">
        <div className="container mx-auto px-4 h-full relative overflow-x-hidden">
          {/* Blue background content - no title box here anymore */}
        </div>
      </div>

      {/* HB10 Image positioned to overlap both sections - with title box attached */}
      <div className="absolute left-0 top-32 z-10 overflow-x-hidden">
        <div className="shadow-2xl relative overflow-x-hidden">
          <img 
            src="https://www.loewen.de/fileadmin/user_upload/Dart-HB10-092024.jpg" 
            alt="LÖWEN DART HB10"
            className="object-cover w-[332px] h-[153px] md:w-[1331px] md:h-[614px] max-w-full" // Added max-w-full to prevent overflow
          />
          
          {/* Logo and text positioned relative to the image */}
          <div className="absolute right-2 top-4 md:right-8 md:top-16 z-30">
            <div className="flex items-center justify-center mb-4 md:mb-8">
              <img 
                src="https://www.loewen.de/fileadmin/_processed_/4/8/csm_Dart_HB_10_Logo_klein_407a328601.png" 
                alt="LÖWEN DART HB10 Logo"
                className="h-16 md:h-32 object-contain max-w-full" // Added max-w-full
              />
            </div>
            <div className="max-w-xs md:max-w-md">
              <p className="text-white text-sm md:text-xl font-semibold break-words"> // Added break-words
                EINE NEUE ÄRA DES ELECTRONIC DARTS.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content section with top padding to account for overlapping image */}
      <div className="bg-slate-50 pt-48 md:pt-96 pb-20 overflow-x-hidden">
        <div className="container mx-auto px-4 overflow-x-hidden">
          {/* Main title and description - removed white background */}
          <div className="mb-16 ml-8 overflow-x-hidden">
            <h2 className="text-4xl font-bold text-[#002454] mb-8 break-words"> // Added break-words
              Das neue Erfolgsmodell - jetzt noch besser.
            </h2>
            <p className="text-lg text-[#002454] max-w-4xl break-words"> // Added break-words
              Der LÖWEN DART HB10 ist die innovative Weiterentwicklung der bisherigen Erfolgsmodelle von LÖWEN ENTERTAINMENT. Mit vielen verschiedenen Spielmodi, einem Touchpad und dem hochauflösenden Monitor bringt der HB10 den elektronischen Dartsport in das Hier und Jetzt. Und das alles im unverwechselbaren LÖWEN DART-Design.
            </p>
          </div>

          {/* Highlights white box - keep white background but remove rotation */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-16 max-w-4xl mx-auto overflow-x-hidden">
            <div className="flex flex-col items-center mb-6">
              <img 
                src="https://www.loewen.de/fileadmin/_processed_/4/8/csm_Dart_HB_10_Logo_klein_407a328601.png" 
                alt="LÖWEN DART HB10 Logo"
                className="mb-4"
              />
              <h3 className="text-2xl font-bold text-[#002454]">Highlights</h3>
            </div>
            <ul className="text-[#002454] space-y-2 text-xl">
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

          {/* Games and Options section - removed white background */}
          <div className="mb-16 overflow-x-hidden">
            <div className="mb-8 max-w-4xl mx-auto ml-8 overflow-x-hidden">
              <h3 className="text-3xl font-bold text-[#002454] mb-4 break-words"> // Added break-words
                Spiele und Optionen
              </h3>
              <p className="text-lg text-[#002454] break-words"> // Added break-words
                Das LÖWEN DART HB10 bietet ab der neuen V4 insgesamt 15 Spielvarianten, fünf Trainingsspiele sowie zahlreiche Spieloptionen inkl. flexiblen Teamspielmöglichkeiten.
              </p>
            </div>
            <div className="max-w-6xl mx-auto mb-8 overflow-x-hidden">
              <div className="shadow-xl overflow-x-hidden">
                <img 
                  src="https://www.loewen.de/fileadmin/user_upload/Erlauterung-Menue-Dart-V4-102024.png" 
                  alt="LÖWEN DART Menu Explanation"
                  className="w-full h-auto max-w-full" // Added max-w-full
                />
              </div>
            </div>
          </div>

          {/* HB10 Monitorkit section - removed white background */}
          <div className="mb-16 overflow-x-hidden">
            <div className="mb-8 max-w-4xl mx-auto ml-8 overflow-x-hidden">
              <h3 className="text-3xl font-bold text-[#002454] break-words"> // Added break-words
                HB10 - Monitorkit
              </h3>
            </div>
            <div className="max-w-6xl mx-auto overflow-x-hidden">
              <div className="shadow-xl overflow-x-hidden">
                <img 
                  src="https://www.loewen.de/fileadmin/user_upload/Dart-Banner-HB10-Monitorkit_092024.png" 
                  alt="LÖWEN DART HB10 Monitorkit"
                  className="w-full h-auto max-w-full" // Added max-w-full
                />
              </div>
            </div>
          </div>

          {/* Two columns with download items - removed white backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto overflow-x-hidden">
            <div className="p-6 overflow-x-hidden">
              <div className="flex items-center space-x-2 min-w-0"> // Added min-w-0
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
                <div className="flex flex-col text-left min-w-0 flex-1"> // Added min-w-0 and flex-1
                  <h4 className="text-lg text-[#002454] mb-1 break-words"> // Added break-words
                    Produktflyer
                  </h4>
                  <p className="text-xl font-bold text-[#002454] mb-2 break-words"> // Added break-words
                    LÖWEN DART HB10
                  </p>
                  <p className="text-lg font-bold text-[#002454] cursor-pointer hover:underline break-words"> // Added break-words
                    Zum E-Paper
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 overflow-x-hidden">
              <div className="flex items-center space-x-2 min-w-0"> // Added min-w-0
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
                <div className="flex flex-col text-left min-w-0 flex-1"> // Added min-w-0 and flex-1
                  <h4 className="text-lg text-[#002454] mb-1 break-words"> // Added break-words
                    Benutzerhandbuch
                  </h4>
                  <p className="text-xl font-bold text-[#002454] mb-2 break-words"> // Added break-words
                    LÖWEN DART
                  </p>
                  <p className="text-lg text-[#002454] mb-2 break-words"> // Added break-words
                    HB10
                  </p>
                  <a 
                    href="https://www.loewen-kundenportal.de/downloadbereich/produktinformationen/dart-soccer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-[#002454] cursor-pointer hover:underline break-words" // Added break-words
                  >
                    Zum Downloadbereich
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom text section - removed white background */}
          <div className="text-center overflow-x-hidden">
            <div className="p-6 max-w-2xl mx-auto overflow-x-hidden">
              <p className="text-lg text-[#002454] mb-4 break-words"> // Added break-words
                Weitere Inhalte stehen für Sie in unserem Downloadbereich zur Verfügung!
              </p>
              
              <a 
                href="https://www.loewen-kundenportal.de/downloadbereich/produktinformationen/dart-soccer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-[#002454] cursor-pointer hover:underline break-words" // Added break-words
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
