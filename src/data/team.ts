import chairmanImage from "@/assets/Chairman.jpg";
import directorImage from "@/assets/Managing Diractor.jpg";

interface LeadersProps {
  image: string,
  name: string,
  position: string,
  speech: string
}

interface StaffsProps {
  name: string,
  position: string,
  education: string,
  experience: string,
}



export const Leaders: LeadersProps[] = [
  {
    image: chairmanImage,
    name: "Shahana Islam",
    position: "Chairman",
    speech:
      "Bangladesh is an emerging power of southeast Asia with rapid economic growth driven by the Industrial Revolution. Energy is a key component to uphold this pace. Affordable renewable energy will be pivotal to face the upcoming challenges in the context of the current world with energy crisis. Net-Zero Technologies Ltd formed to fill the gap regarding technologies and customized renewable energy solutions with committed quality and expertise. I am wishing a bright future ahead with prosperity of renewable energy in power sector of Bangladesh.",
  },
  {
    image: directorImage,
    name: "Al-Amin Murshed",
    position: "Managing Director",
    speech:
      "Since 1971, overcoming several turmoil Bangladesh have entered the era of 100% electrification recently. As this country is blessed with natural gas, till now power generation is heavily dependent on this fossil fuel which is about to deplete soon due to increasing demand by industries. As an alternative, imported fossil fuel-based power generation might lead this country’s energy security in crisis. Decentralized and distributed renewable energy can mitigate this situation to a good extent by decreasing dependency on fossil fuels. We, Net-Zero Technologies Ltd believe in sustainable energy to protect energy independence of Bangladesh.",
  },
  {
    image: "",
    name: "Mostafa Al Mahmud",
    position: "Director",
    speech: "",
  },
];

export const StaffMembers : StaffsProps [] = [
  {
    name: "Md.Atiquzzaman",
    position: "Civil Engineer",
    education: "BSc in Civil",
    experience: "9 years",
  },
  {
    name: "Amal Chandra Kar",
    position: "Mechanical Engineer",
    education: "MSc in Mechanical",
    experience: "20 years",
  },
  {
    name: "Milton Chandra Debnath",
    position: "Electrical Engineer",
    education: "MSc in EEE",
    experience: "3 years",
  },
  {
    name: "Ornab Sariar",
    position: "Software Engineer",
    education: "BSc in CSE",
    experience: "3 years",
  },
  {
    name: "MD. Manik Sheikh",
    position: "Site Engineer",
    education: "BSc in EEE",
    experience: "5 years",
  },
  {
    name: "Mohammad Omar Faruk",
    position: "Site Engineer",
    education: "Diploma in EEE",
    experience: "7 years",
  },
  {
    name: "Md Sharier Alam",
    position: "Site Engineer",
    education: "Diploma in EEE",
    experience: "2 years",
  },
  {
    name: "Shabuddin Hossain",
    position: "AutoCAD Operator",
    education: "Diploma in Civil",
    experience: "8 years",
  },
  {
    name: "Samina Akter",
    position: "Computer Operator",
    education: "Diploma in Civil",
    experience: "1.6 years",
  },
  {
    name: "Jamir Khan Pathan",
    position: "Computer Operator",
    education: "Diploma in EEE",
    experience: "1 year",
  },
];
