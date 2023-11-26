import React from 'react';
import {useEffect,useState} from "react";
import './navcss.css';
import Select from 'react-select';

function loadBootstrap() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
  document.head.appendChild(link);

  const script2 = document.createElement('script');
  script2.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  document.head.appendChild(script2);

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
  document.head.appendChild(script);
}

function WorldClock() {
    useEffect(() => {
        loadBootstrap();
      }, []);
      const continentsData = [
        {
          name: 'Africa',
          countries: [
            { country: 'Algeria', capital: 'Algiers', name:'Africa/Algiers'},
                        { country: 'Angola', capital: 'Luanda', name:'Africa/Luanda' },
                        { country: 'Benin', capital: 'Porto-Novo', name:'Africa/Porto-Novo' },
                        { country: 'Botswana', capital: 'Gaborone', name:'Africa/Gaborone' },
                        { country: 'Burkina Faso', capital: 'Ouagadougou', name:'Africa/Ouagadougou' },
                        { country: 'Burundi', capital: 'Bujumbura', name:'Africa/Bujumbura' },
                       /* { country: 'Cabo Verde', capital: 'Praia', name:'Africa/Cabo-Verde' },*/
                        { country: 'Cameroon', capital: 'Yaoundé', name:'Africa/Douala' },
                        { country: 'Central African Republic', capital: 'Bangui' , name:'Africa/Bangui'},
                        { country: 'Chad', capital: 'Djamena' , name:'Africa/Djamena'},
                        { country: 'Comoros', capital: 'Moroni' , name:'Africa/Moroni'},
                        { country: 'Democratic Republic of the Congo', capital: 'Kinshasa', name:'Africa/Kinshasa' },
                        { country: 'Djibouti', capital: 'Djibouti' , name:'Africa/Djibouti'},
                        { country: 'Egypt', capital: 'Cairo', name:'Africa/Cairo' },
                        { country: 'Equatorial Guinea', capital: 'Malabo' , name:'Africa/Malabo'},
                        { country: 'Eritrea', capital: 'Asmara', name:'Africa/Asmara' },
                        { country: 'Eswatini', capital: 'Mbabane' , name:'Africa/Mbabane'},
                        { country: 'Ethiopia', capital: 'Addis Ababa' , name:'Africa/Addis Ababa'},
                        { country: 'Gabon', capital: 'Libreville', name:'Africa/Libreville' },
                        { country: 'Gambia', capital: 'Banjul' , name:'Africa/Banjul'},
                        { country: 'Ghana', capital: 'Accra' , name:'Africa/Accra'},
                        { country: 'Guinea', capital: 'Conakry' , name:'Africa/Conakry'},
                        { country: 'Guinea-Bissau', capital: 'Bissau' , name:'Africa/Bissau'},
                        { country: 'Ivory Coast', capital: 'Yamoussoukro' , name:'Africa/Yamoussoukro'},
                        { country: 'Kenya', capital: 'Nairobi' , name:'Africa/Nairobi'},
                        { country: 'Lesotho', capital: 'Maseru' , name:'Africa/Maseru'},
                        { country: 'Liberia', capital: 'Monrovia' , name:'Africa/Monrovia'},
                        { country: 'Libya', capital: 'Tripoli' , name:'Africa/Tripoli'},
                        { country: 'Madagascar', capital: 'Antananarivo' , name:'Africa/Antananarivo'},
                        { country: 'Malawi', capital: 'Lilongwe' , name:'Africa/Lilongwe'},
                        { country: 'Mali', capital: 'Bamako', name:'Africa/Bamako' },
                        { country: 'Mauritania', capital: 'Nouakchott', name:'Africa/Nouakchott' },
                        { country: 'Mauritius', capital: 'Port Louis' , name:'Africa/Port Louis'},
                        { country: 'Morocco', capital: 'Rabat' , name:'Africa/Rabat'},
                        { country: 'Mozambique', capital: 'Maputo' , name:'Africa/Maputo'},
                        { country: 'Namibia', capital: 'Windhoek', name:'Africa/Windhoek' },
                        { country: 'Niger', capital: 'Niamey' , name:'Africa/Niamey'},
                        { country: 'Nigeria', capital: 'Abuja', name:'Africa/Abuja' },
                        { country: 'Rwanda', capital: 'Kigali' , name:'Africa/Kigali'},
                        { country: 'Sao Tome and Principe', capital: 'São Tomé' , name:'Africa/São Tomé'},
                        { country: 'Senegal', capital: 'Dakar' , name:'Africa/Dakar'},
                        { country: 'Seychelles', capital: 'Victoria', name:'Africa/Victoria' },
                        { country: 'Sierra Leone', capital: 'Freetown' , name:'Africa/Freetown'},
                        { country: 'Somalia', capital: 'Mogadishu' , name:'Africa/Mogadishu'},
                        { country: 'South Africa', capital: 'Pretoria' , name:'Africa/Pretoria'},
                        { country: 'South Sudan', capital: 'Juba' , name:'Africa/Juba'},
                        { country: 'Sudan', capital: 'Khartoum', name:'Africa/Khartoum' },
                        { country: 'Tanzania', capital: 'Dodoma' , name:'Africa/Dodoma'},
                        { country: 'Togo', capital: 'Lome' , name:'Africa/Lome'},
                        { country: 'Tunisia', capital: 'Tunis' , name:'Africa/Tunis'},
                        { country: 'Uganda', capital: 'Kampala', name:'Africa/Kampala' },
                        { country: 'Zambia', capital: 'Lusaka', name:'Africa/Lusaka' },
                        { country: 'Zimbabwe', capital: 'Harare' , name:'Africa/Harare'},
          ],
        },
        {
          name: 'Asia',
          countries: [
          { country: 'Afghanistan', capital: 'Kabul' , name:'Asia/Kabul'},
              { country: 'Armenia', capital: 'Yerevan' , name:'Asia/Yerevan'},
              { country: 'Azerbaijan', capital: 'Baku' , name:'Asia/Baku'},
              { country: 'Bahrain', capital: 'Manama' , name:'Asia/Manama'},
              { country: 'Bangladesh', capital: 'Dhaka' , name:'Asia/Dhaka'},
              { country: 'Bhutan', capital: 'Thimphu' , name:'Asia/Thimphu'},
              { country: 'Brunei', capital: 'Bandar Seri Begawan' , name:'Asia/Bandar Seri Begawan'},
              { country: 'Cambodia', capital: 'Phnom Penh' , name:'Asia/Phnom Penh'},
              { country: 'China', capital: 'Beijing' , name:'Asia/Beijing'},
              { country: 'Cyprus', capital: 'Nicosia' , name:'Asia/Nicosia'},
              { country: 'Georgia', capital: 'Tbilisi' , name:'Asia/Tbilisi'},
              { country: 'India', capital: 'New Delhi' , name:'Asia/New Delhi'},
              { country: 'Indonesia', capital: 'Jakarta' , name:'Asia/Jakarta'},
              { country: 'Iran', capital: 'Tehran' , name:'Asia/Tehran'},
              { country: 'Iraq', capital: 'Baghdad' , name:'Asia/Baghdad'},
              { country: 'Israel', capital: 'Jerusalem' , name:'Asia/Jerusalem'},
              { country: 'Japan', capital: 'Tokyo' , name:'Asia/Tokyo'},
              { country: 'Jordan', capital: 'Amman' , name:'Asia/Amman'},
              { country: 'Kazakhstan', capital: 'Almaty' , name:'Asia/Almaty'},
              { country: 'Kuwait', capital: 'Kuwait City' , name:'Asia/Kuwait City'},
              { country: 'Kyrgyzstan', capital: 'Bishkek' , name:'Asia/Bishkek'},
              { country: 'Laos', capital: 'Vientiane' , name:'Asia/Vientiane'},
              { country: 'Lebanon', capital: 'Beirut' , name:'Asia/Beirut'},
              { country: 'Malaysia', capital: 'Kuala Lumpur' , name:'Asia/Kuala Lumpur'},
              { country: 'Maldives', capital: 'Malé' , name:'Asia/Malé'},
              { country: 'Mongolia', capital: 'Ulaanbaatar' , name:'Asia/Ulaanbaatar'},
              { country: 'Myanmar', capital: 'Yangon' , name:'Asia/Yangon'},
              { country: 'Nepal', capital: 'Kathmandu' , name:'Asia/Kathmandu'},
              { country: 'North Korea', capital: 'Pyongyang' , name:'Asia/Pyongyang'},
              { country: 'Oman', capital: 'Muscat' , name:'Asia/Muscat'},
              { country: 'Pakistan', capital: 'Islamabad' , name:'Asia/Islamabad'},
              { country: 'Palestine', capital: 'Jerusalem' , name:'Asia/Jerusalem'},
              { country: 'Philippines', capital: 'Manila' , name:'Asia/Manila'},
              { country: 'Qatar', capital: 'Doha' , name:'Asia/Doha'},
              { country: 'Saudi Arabia', capital: 'Riyadh' , name:'Asia/Riyadh'},
              { country: 'Singapore', capital: 'Singapore' , name:'Asia/Singapore'},
              { country: 'South Korea', capital: 'Seoul' , name:'Asia/Seoul'},
              { country: 'Sri Lanka', capital: 'Colombo' , name:'Asia/Colombo'},
              { country: 'Syria', capital: 'Damascus' , name:'Asia/Damascus'},
              { country: 'Taiwan', capital: 'Taipei' , name:'Asia/Taipei'},
              { country: 'Tajikistan', capital: 'Dushanbe' , name:'Asia/Dushanbe'},
              { country: 'Thailand', capital: 'Bangkok' , name:'Asia/Bangkok'},
              { country: 'Timor-Leste', capital: 'Dili' , name:'Asia/Dili'},
              { country: 'Turkey', capital: 'Istanbul' , name:'Asia/Istanbul'},
              { country: 'Turkmenistan', capital: 'Ashgabat' , name:'Asia/Ashgabat'},
              { country: 'United Arab Emirates', capital: 'Abu Dhabi' , name:'Asia/Abu Dhabi'},
              { country: 'Uzbekistan', capital: 'Tashkent' , name:'Asia/Tashkent'},
              { country: 'Vietnam', capital: 'Hanoi' , name:'Asia/Hanoi'},
              { country: 'Yemen', capital: 'Sanaa', name:'Asia/Sanaa' },
          ],
      },
      {
        name: 'Europe',
        countries: [
        { country: 'Albania', capital: 'Tirana' , name:'Europe/Tirana'},
            { country: 'Andorra', capital: 'Andorra la Vella' , name:'Europe/Andorra la Vella'},
            { country: 'Austria', capital: 'Vienna' , name:'Europe/Vienna'},
            { country: 'Belarus', capital: 'Minsk' , name:'Europe/Minsk'},
            { country: 'Belgium', capital: 'Brussels' , name:'Europe/Brussels'},
            { country: 'Bosnia and Herzegovina', capital: 'Sarajevo' , name:'Europe/Sarajevo'},
            { country: 'Bulgaria', capital: 'Sofia' , name:'Europe/Sofia'},
            { country: 'Croatia', capital: 'Zagreb' , name:'Europe/Zagreb'},
            { country: 'Cyprus', capital: 'Nicosia' , name:'Europe/Nicosia'},
            { country: 'Czech Republic', capital: 'Prague' , name:'Europe/Prague'},
            { country: 'Denmark', capital: 'Copenhagen' , name:'Europe/Copenhagen'},
            { country: 'Estonia', capital: 'Tallinn' , name:'Europe/Tallinn'},
            { country: 'Faroe Islands', capital: 'Tórshavn' , name:'Europe/Tórshavn'},
            { country: 'Finland', capital: 'Helsinki' , name:'Europe/Helsinki'},
            { country: 'France', capital: 'Paris' , name:'Europe/Paris'},
            { country: 'Georgia', capital: 'Tbilisi' , name:'Europe/Tbilisi'},
            { country: 'Germany', capital: 'Berlin' , name:'Europe/Berlin'},
            { country: 'Gibraltar', capital: 'Gibraltar' , name:'Europe/Gibraltar'},
            { country: 'Greece', capital: 'Athens' , name:'Europe/Athens'},
            { country: 'Greenland', capital: 'Nuuk' , name:'Europe/Nuuk'},
            { country: 'Hungary', capital: 'Budapest' , name:'Europe/Budapest'},
            { country: 'Iceland', capital: 'Reykjavik' , name:'Europe/Reykjavik'},
            { country: 'Ireland', capital: 'Dublin' , name:'Europe/Dublin'},
            { country: 'Isle of Man', capital: 'Douglas' , name:'Europe/Douglas'},
            { country: 'Italy', capital: 'Rome' , name:'Europe/Rome'},
            { country: 'Jersey', capital: 'Saint Helier' , name:'Europe/Saint Helier'},
            { country: 'Kosovo', capital: 'Pristina' , name:'Europe/Pristina'},
            { country: 'Latvia', capital: 'Riga' , name:'Europe/Riga'},
            { country: 'Liechtenstein', capital: 'Vaduz' , name:'Europe/Vaduz'},
            { country: 'Lithuania', capital: 'Vilnius' , name:'Europe/Vilnius'},
            { country: 'Luxembourg', capital: 'Luxembourg City' , name:'Europe/Luxembourg City'},
            { country: 'Malta', capital: 'Valletta' , name:'Europe/Valletta'},
            { country: 'Moldova', capital: 'Chisinau' , name:'Europe/Chisinau'},
            { country: 'Monaco', capital: 'Monaco' , name:'Europe/Monaco'},
            { country: 'Montenegro', capital: 'Podgorica' , name:'Europe/Podgorica'},
            { country: 'Netherlands', capital: 'Amsterdam' , name:'Europe/Amsterdam'},
            { country: 'North Macedonia', capital: 'Skopje' , name:'Europe/Skopje'},
            { country: 'Norway', capital: 'Oslo' , name:'Europe/Oslo'},
            { country: 'Poland', capital: 'Warsaw' , name:'Europe/Warsaw'},
            { country: 'Portugal', capital: 'Lisbon' , name:'Europe/Lisbon'},
            { country: 'Romania', capital: 'Bucharest' , name:'Europe/Bucharest'},
            { country: 'Russia', capital: 'Moscow' , name:'Europe/Moscow'},
            { country: 'San Marino', capital: 'San Marino' , name:'Europe/San Marino'},
            { country: 'Serbia', capital: 'Belgrade' , name:'Europe/Belgrade'},
            { country: 'Slovakia', capital: 'Bratislava' , name:'Europe/Bratislava'},
            { country: 'Slovenia', capital: 'Ljubljana' , name:'Europe/Ljubljana'},
            { country: 'Spain', capital: 'Madrid' , name:'Europe/Madrid'},
            { country: 'Svalbard and Jan Mayen', capital: 'Longyearbyen' , name:'Europe/Longyearbyen'},
            { country: 'Sweden', capital: 'Stockholm' , name:'Europe/Stockholm'},
            { country: 'Switzerland', capital: 'Zurich' , name:'Europe/Zurich'},
            { country: 'Ukraine', capital: 'Kiev' , name:'Europe/Kiev'},
            { country: 'Europe/United Kingdom', capital: 'London' , name:'Europe/London'},
            { country: 'Vatican City', capital: 'Vatican City' , name:'Europe/Vatican City'},
        ],
    },
    {
      name: 'America',
      countries: [
          { name: 'America/Adak', capital: 'Adak' },
          { name: 'America/Anchorage', capital: 'Anchorage' },
          { name: 'America/Anguilla', capital: 'Anguilla' },
          { name: 'America/Antigua', capital: 'Antigua' },
          { name: 'America/Araguaina', capital: 'Araguaina' },
          { name: 'America/Argentina/Buenos_Aires', capital: 'Buenos Aires' },
          { name: 'America/Argentina/Catamarca', capital: 'Catamarca' },
          { name: 'America/Argentina/ComodRivadavia', capital: 'ComodRivadavia' },
          { name: 'America/Argentina/Cordoba', capital: 'Cordoba' },
          { name: 'America/Argentina/Jujuy', capital: 'Jujuy' },
          { name: 'America/Argentina/La_Rioja', capital: 'La Rioja' },
          { name: 'America/Argentina/Mendoza', capital: 'Mendoza' },
          { name: 'America/Argentina/Rio_Gallegos', capital: 'Rio Gallegos' },
          { name: 'America/Argentina/Salta', capital: 'Salta' },
          { name: 'America/Argentina/San_Juan', capital: 'San Juan' },
          { name: 'America/Argentina/San_Luis', capital: 'San Luis' },
          { name: 'America/Argentina/Tucuman', capital: 'Tucuman' },
          { name: 'America/Argentina/Ushuaia', capital: 'Ushuaia' },
          { name: 'America/Aruba', capital: 'Aruba' },
          { name: 'America/Asuncion', capital: 'Asuncion' },
          { name: 'America/Atikokan', capital: 'Atikokan' },
          { name: 'America/Atka', capital: 'Atka' },
          { name: 'America/Bahia', capital: 'Bahia' },
          { name: 'America/Barbados', capital: 'Barbados' },
          { name: 'America/Belem', capital: 'Belem' },
          { name: 'America/Belize', capital: 'Belize' },
          { name: 'America/Blanc-Sablon', capital: 'Blanc-Sablon' },
          { name: 'America/Boa_Vista', capital: 'Boa Vista' },
          { name: 'America/Bogota', capital: 'Bogota' },
          { name: 'America/Boise', capital: 'Boise' },
          { name: 'America/Buenos_Aires', capital: 'Buenos Aires' },
          { name: 'America/Cambridge_Bay', capital: 'Cambridge Bay' },
          { name: 'America/Campo_Grande', capital: 'Campo Grande' },
          { name: 'America/Cancun', capital: 'Cancun' },
          { name: 'America/Caracas', capital: 'Caracas' },
          { name: 'America/Catamarca', capital: 'Catamarca' },
          { name: 'America/Cayenne', capital: 'Cayenne' },
          { name: 'America/Cayman', capital: 'Cayman' },
          { name: 'America/Chicago', capital: 'Chicago' },
          { name: 'America/Chihuahua', capital: 'Chihuahua' },
          { name: 'America/Coral_Harbour', capital: 'Coral Harbour' },
          { name: 'America/Cordoba', capital: 'Cordoba' },
          { name: 'America/Costa_Rica', capital: 'Costa Rica' },
          { name: 'America/Cuiaba', capital: 'Cuiaba' },
          { name: 'America/Curacao', capital: 'Curacao' },
          { name: 'America/Danmarkshavn', capital: 'Danmarkshavn' },
          { name: 'America/Dawson', capital: 'Dawson' },
          { name: 'America/Dawson_Creek', capital: 'Dawson Creek' },
          { name: 'America/Denver', capital: 'Denver' },
          { name: 'America/Detroit', capital: 'Detroit' },
          { name: 'America/Dominica', capital: 'Dominica' },
          { name: 'America/Edmonton', capital: 'Edmonton' },
          { name: 'America/Eirunepe', capital: 'Eirunepe' },
          { name: 'America/El_Salvador', capital: 'El Salvador' },
          { name: 'America/Ensenada', capital: 'Ensenada' },
          { name: 'America/Fort_Wayne', capital: 'Fort Wayne' },
          { name: 'America/Fortaleza', capital: 'Fortaleza' },
          { name: 'America/Glace_Bay', capital: 'Glace Bay' },
          { name: 'America/Godthab', capital: 'Godthab' },
          { name: 'America/Goose_Bay', capital: 'Goose Bay' },
          { name: 'America/Grand_Turk', capital: 'Grand Turk' },
          { name: 'America/Grenada', capital: 'Grenada' },
          { name: 'America/Guadeloupe', capital: 'Guadeloupe' },
          { name: 'America/Guatemala', capital: 'Guatemala' },
          { name: 'America/Guayaquil', capital: 'Guayaquil' },
          { name: 'America/Guyana', capital: 'Guyana' },
          { name: 'America/Halifax', capital: 'Halifax' },
          { name: 'America/Havana', capital: 'Havana' },
          { name: 'America/Hermosillo', capital: 'Hermosillo' },
          { name: 'America/Indiana/Indianapolis', capital: 'Indianapolis' },
          { name: 'America/Indiana/Knox', capital: 'Knox' },
          { name: 'America/Indiana/Marengo', capital: 'Marengo' },
          { name: 'America/Indiana/Petersburg', capital: 'Petersburg' },
          { name: 'America/Indiana/Tell_City', capital: 'Tell City' },
          { name: 'America/Indiana/Vevay', capital: 'Vevay' },
          { name: 'America/Indiana/Vincennes', capital: 'Vincennes' },
          { name: 'America/Indiana/Winamac', capital: 'Winamac' },
          { name: 'America/Indianapolis', capital: 'Indianapolis' },
          { name: 'America/Inuvik', capital: 'Inuvik' },
          { name: 'America/Iqaluit', capital: 'Iqaluit' },
          { name: 'America/Jamaica', capital: 'Jamaica' },
          { name: 'America/Jujuy', capital: 'Jujuy' },
          { name: 'America/Juneau', capital: 'Juneau' },
          { name: 'America/Kentucky/Louisville', capital: 'Louisville' },
          { name: 'America/Kentucky/Monticello', capital: 'Monticello' },
          { name: 'America/Knox_IN', capital: 'Knox IN' },
          { name: 'America/La_Paz', capital: 'La Paz' },
          { name: 'America/Lima', capital: 'Lima' },
          { name: 'America/Los_Angeles', capital: 'Los Angeles' },
          { name: 'America/Louisville', capital: 'Louisville' },
          { name: 'America/Maceio', capital: 'Maceio' },
          { name: 'America/Managua', capital: 'Managua' },
          { name: 'America/Manaus', capital: 'Manaus' },
          { name: 'America/Marigot', capital: 'Marigot' },
          { name: 'America/Martinique', capital: 'Martinique' },
          { name: 'America/Matamoros', capital: 'Matamoros' },
          { name: 'America/Mazatlan', capital: 'Mazatlan' },
          { name: 'America/Mendoza', capital: 'Mendoza' },
          { name: 'America/Menominee', capital: 'Menominee' },
          { name: 'America/Merida', capital: 'Merida' },
          { name: 'America/Mexico_City', capital: 'Mexico City' },
          { name: 'America/Miquelon', capital: 'Miquelon' },
          { name: 'America/Moncton', capital: 'Moncton' },
          { name: 'America/Monterrey', capital: 'Monterrey' },
          { name: 'America/Montevideo', capital: 'Montevideo' },
          { name: 'America/Montreal', capital: 'Montreal' },
          { name: 'America/Montserrat', capital: 'Montserrat' },
          { name: 'America/Nassau', capital: 'Nassau' },
          { name: 'America/New_York', capital: 'New York' },
          { name: 'America/Nipigon', capital: 'Nipigon' },
          { name: 'America/Nome', capital: 'Nome' },
          { name: 'America/Noronha', capital: 'Noronha' },
          { name: 'America/North_Dakota/Center', capital: 'North Dakota Center' },
          { name: 'America/North_Dakota/New_Salem', capital: 'North Dakota New Salem' },
          { name: 'America/Ojinaga', capital: 'Ojinaga' },
          { name: 'America/Panama', capital: 'Panama' },
          { name: 'America/Pangnirtung', capital: 'Pangnirtung' },
          { name: 'America/Paramaribo', capital: 'Paramaribo' },
          { name: 'America/Phoenix', capital: 'Phoenix' },
          { name:'America/Port-au-Prince', capital: 'Port-au-Prince'},
          { name:'America/Port_of_Spain	', capital: 'Port_of_Spain'},
          { name:'America/Porto_Acre', capital: 'Porto_Acre'},
          { name:'America/Porto_Velho', capital: 'Porto_Velho'},
          { name:'America/Puerto_Rico', capital: 'Puerto_Rico'},
          { name:'America/Rainy_River', capital: 'Rainy_River'},
          { name:'America/Rankin_Inlet', capital: 'Rankin_Inlet'},
          { name:'America/Recife', capital: 'Recife'},
          { name:'America/Regina', capital: 'Regina'},
          { name:'America/Resolute', capital: 'Resolute'},
          { name:'America/Rio_Branco', capital: 'Rio_Branco'},
          { name:'America/Rosario', capital: 'Rosario'},
          { name:'America/Santa_Isabel', capital: 'Santa_Isabel'},
          { name:'America/Santarem', capital: 'Santarem'},
          { name:'America/Santiago', capital: 'Santiago'},
          { name:'America/Santo_Domingo', capital: 'Santo_Domingo'},
          { name:'America/Sao_Paulo', capital: 'Sao_Paulo'},
          { name:'America/Scoresbysund', capital: 'Scoresbysund'},
          { name:'America/Shiprock', capital: 'Shiprock'},
          { name:'America/St_Barthelemy', capital: 'St_Barthelemy'},
          { name:'America/St_Johns', capital: 'St_Johns'},
          { name:'America/St_Kitts', capital: 'St_Kitts'},
          { name:'America/St_Lucia', capital: 'St_Lucia'},
          { name:'America/St_Thomas', capital: 'St_Thomas'},
          { name:'America/St_Vincent', capital: 'St_Vincent'},
          { name:'America/Swift_Current', capital: 'Swift_Current'},
          { name:'America/Tegucigalpa', capital: 'Tegucigalpa'},
          { name:'America/Thule	', capital: 'Thule'	},
          { name:'America/Thunder_Bay', capital: 'Thunder_Bay'},
          { name:'America/Tijuana', capital: 'Tijuana'},
          { name:'America/Toronto', capital: 'Toronto'},
          { name:'America/Tortola', capital: 'Tortola'},
          { name:'America/Vancouver', capital: 'Vancouver'},
          { name:'America/Virgin', capital: 'Virgin'},
          { name:'America/Whitehorse', capital: 'Whitehorse'},
          { name:'America/Winnipeg', capital: 'Winnipeg'},
          { name:'America/Yakutat', capital: 'Yakutat'},
          { name:'America/Yellowknife', capital: 'Yellowknife'},
      ],
  },
  {
    name: 'Oceania',
        countries: [
        { name: 'Indian/Antananarivo', capital: 'Antananarivo' },
        { name: 'Indian/Chagos', capital: 'Chagos' },
        { name: 'Indian/Christmas', capital: 'Christmas' },
        { name: 'Indian/Cocos', capital: 'Cocos' },
        { name: 'Indian/Comoro', capital: 'Comoro' },
        { name: 'Indian/Kerguelen', capital: 'Kerguelen' },
        { name: 'Indian/Mahe', capital: 'Mahe' },
        { name: 'Indian/Maldives', capital: 'Maldives' },
        { name: 'Indian/Mauritius', capital: 'Mauritius' },
        { name: 'Indian/Mayotte', capital: 'Mayotte' },
        { name: 'Indian/Reunion', capital: 'Reunion' },
        { name: 'Pacific/Apia', capital: 'Apia' },
        { name: 'Pacific/Auckland', capital: 'Auckland' },
        { name: 'Pacific/Chatham', capital: 'Chatham' },
        { name: 'Pacific/Easter', capital: 'Easter' },
        { name: 'Pacific/Efate', capital: 'Efate' },
        { name: 'Pacific/Enderbury', capital: 'Enderbury' },
        { name: 'Pacific/Fakaofo', capital: 'Fakaofo' },
        { name: 'Pacific/Fiji', capital: 'Suva' },
        { name: 'Pacific/Funafuti', capital: 'Funafuti' },
        { name: 'Pacific/Galapagos', capital: 'Galapagos' },
        { name: 'Pacific/Gambier', capital: 'Gambier' },
        { name: 'Pacific/Guadalcanal', capital: 'Guadalcanal' },
        { name: 'Pacific/Guam', capital: 'Hagåtña' },
        { name: 'Pacific/Honolulu', capital: 'Honolulu' },
        { name: 'Pacific/Johnston', capital: 'Johnston' },
        { name: 'Pacific/Kiritimati', capital: 'Kiritimati' },
        { name: 'Pacific/Kosrae', capital: 'Kosrae' },
        { name: 'Pacific/Kwajalein', capital: 'Kwajalein' },
        { name: 'Pacific/Majuro', capital: 'Majuro' },
        { name: 'Pacific/Marquesas', capital: 'Marquesas' },
        { name: 'Pacific/Midway', capital: 'Midway' },
        { name: 'Pacific/Nauru', capital: 'Yaren' },
        { name: 'Pacific/Niue', capital: 'Alofi' },
        { name: 'Pacific/Norfolk', capital: 'Kingston' },
        { name: 'Pacific/Noumea', capital: 'Nouméa' },
        { name: 'Pacific/Pago_Pago', capital: 'Pago Pago' },
        { name: 'Pacific/Palau', capital: 'Ngerulmud' },
        { name: 'Pacific/Pitcairn', capital: 'Adamstown' },
        { name: 'Pacific/Ponape', capital: 'Pohnpei' },
        { name: 'Pacific/Port_Moresby', capital: 'Port Moresby' },
        { name: 'Pacific/Rarotonga', capital: 'Avarua' },
        { name: 'Pacific/Saipan', capital: 'Saipan' },
        { name: 'Pacific/Samoa', capital: 'Apia' },
        { name: 'Pacific/Tahiti', capital: 'Papeete' },
        { name: 'Pacific/Tarawa', capital: 'Tarawa' },
        { name: 'Pacific/Tongatapu', capital: 'Nukualofa' },
        { name: 'Pacific/Truk', capital: 'Weno' },
        { name: 'Pacific/Wake', capital: 'Wake' },
        { name: 'Pacific/Wallis', capital: 'Mata-Utu' },
        { name: 'Antarctica/Casey',capital:'Casey'},
        { name: 'Antarctica/Davis',capital:'Davis'},
        { name: 'Antarctica/DumontDUrville',capital:'DumontDUrville'},
        { name: 'Antarctica/Macquarie',capital:'Macquarie'},
        { name: 'Antarctica/Mawson',capital:'Mawson'},
        { name: 'Antarctica/McMurdo',capital:'McMurdo'},
        { name: 'Antarctica/Palmer',capital:'Palmer'},
        { name: 'Antarctica/Rothera',capital:'Rothera'},
        { name: 'Antarctica/South_Pole',capital:'South_Pole'},
        { name: 'Antarctica/Syowa',capital:'Syowa'},
        { name: 'Antarctica/Vostok',capital:'Vostok'},
        { name: 'Arctic/Longyearbyen',capital:'Longyearbyen'},
        { name:'Atlantic/Azores',capital:'Azores'},
        { name:'Atlantic/Bermuda',capital:'Bermuda'},
        { name:'Atlantic/Canary',capital:'Canary'},
        { name:'Atlantic/Cape_Verde',capital:'Cape_Verde'},
        { name:'Atlantic/Faeroe',capital:'Faeroe'},
        { name:'Atlantic/Faroe',capital:'Faroe'},
        { name:'Atlantic/Jan_Mayen',capital:'Jan_Mayen'},
        { name:'Atlantic/Madeira',capital:'Madeira'},
        { name:'Atlantic/Reykjavik',capital:'Reykjavik'},
        { name:'Atlantic/South_Georgia',capital:'South_Georgia'},
        { name:'Atlantic/St_Helena',capital:'St_Helena'},
        { name:'Atlantic/Stanley',capital:'Stanley'},
        { name:'Australia/ACT	',capital:'ACT	'},
        { name:'Australia/Adelaide',capital:'Adelaide'},
        { name:'Australia/Brisbane',capital:'Brisbane'},
        { name:'Australia/Broken_Hill',capital:'Broken_Hill'},
        { name:'Australia/Canberra',capital:'Canberra'},
        { name:'Australia/Currie',capital:'Currie'},
        { name:'Australia/Darwin',capital:'Darwin'},
        { name:'Australia/Eucla',capital:'Eucla'},
        { name:'Australia/Hobart',capital:'Hobart'},
        { name:'Australia/LHI',capital:'LHI'},
        { name:'Australia/Lindeman',capital:'Lindeman'},
        { name:'Australia/Lord_Howe',capital:'Lord_Howe'},
        { name:'Australia/Melbourne',capital:'Melbourne'},
        { name:'Australia/North',capital:'North'},
        { name:'Australia/NSW',capital:'NSW'},
        { name:'Australia/Perth',capital:'Perth'},
        { name:'Australia/Queensland',capital:'Queensland'},
        { name:'Australia/South',capital:'South'},
        { name:'Australia/Sydney',capital:'Sydney'},
        { name:'Australia/Tasmania',capital:'Tasmania'},
        { name:'Australia/Victoria',capital:'Victoria'},
        { name:'Australia/West',capital:'West'},
        { name:'Australia/Yancowinna',capital:'Yancowinna'},
    
    ]
},
      ];
      const [selectedCountry, setSelectedCountry] = useState(null);
      const [addedCountries, setAddedCountries] = useState([]);
     

      
      const getTimezone = (name) => {
        try {
          const date = new Date().toLocaleTimeString('en-US', {
            timeZone: name,
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          });
          return date;
        } catch (error) {
          console.error('Error getting timezone:', error);
          return 'Invalid Timezone';
        }
      };

      const handleAddCountry = () => {
        if (selectedCountry) {
          setAddedCountries((prevCountries) => [...prevCountries, selectedCountry]);
          setSelectedCountry(null);
        }
      };
    
      const renderTable = () => {
        return (
          <table className="table">
            <tbody>
              {addedCountries.map((country, index) => (
                <tr key={index} className='rows'>
                  <td className="country-cell">
                    {country.label}
                  </td>
                  <td className="country-cell time">
                  {getTimezone(country.name)}
                  </td>
                  <td style={{textAlign: 'right'}}>
              <button className='removebttn' onClick={() => handleRemoveCountry(index)}>X</button>
            </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      };
      const handleRemoveCountry = (index) => {
        const updatedCountries = [...addedCountries];
        updatedCountries.splice(index, 1);
        setAddedCountries(updatedCountries);
      };
      
      useEffect(() => {
        const intervalId = setInterval(() => {
          setAddedCountries([...addedCountries]); 
        }, 1000);
        return () => clearInterval(intervalId);
      }, [addedCountries]);

          const options = continentsData.flatMap((continent) =>
        continent.countries.map((country) => ({
          label: country.capital,
          value: country.capital,
          name: country.name,
        }))
      );


    return (
        <div className="container-fluid">
          <div>
      <p style={{ display: 'inline-block', marginRight: '16px', marginTop: '20px' }}>Select or Search by Capitals:</p>
      <div style={{ display: 'inline-block' }}>
      <Select
        options={options}
        isSearchable={true}
        placeholder="Select a country"
        style={{ borderRadius: '8px', marginBottom: '10px', display: 'inline-block' }}
        className="glowing-item capitalsselect"
        onChange={(selectedOption) => setSelectedCountry(selectedOption)}
      /></div>
      <button onClick={handleAddCountry} className="css-button-sliding-to-left" style={{ marginLeft: '10px', display: 'inline-block' }}>
        ADD
      </button>
      </div>
      {addedCountries.length > 0 && (
        <table className="table">
          <tbody>{renderTable()}</tbody>
        </table>
      )}
    </div>


  );
}

export default WorldClock;