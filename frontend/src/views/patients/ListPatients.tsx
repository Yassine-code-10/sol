import { log } from "console";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ListPatients() {
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [patients, setPatients] = React.useState<any[]>([
    {
      date: "05/12/2023",
      nom: "Cherkaoui",
      prenom: "Mehdi",
      dateNaissance: "01/01/1997",
      sexe: "M",
      cine: "BK623575",
      couverture: "CNOPS",
      derniereMiseAJour: "05/12/2023 12:45",
    },
    {
      date: "05/12/2023",
      nom: "Cherkaoui",
      prenom: "Mehdi",
      dateNaissance: "01/01/1997",
      sexe: "M",
      cine: "BK623575",
      couverture: "CNOPS",
      derniereMiseAJour: "05/12/2023 12:45",
    },
    {
      date: "05/12/2023",
      nom: "Cherkaoui",
      prenom: "Mehdi",
      dateNaissance: "01/01/1997",
      sexe: "M",
      cine: "BK623575",
      couverture: "CNOPS",
      derniereMiseAJour: "05/12/2023 12:45",
    },
    {
      date: "05/12/2023",
      nom: "Cherkaoui",
      prenom: "Mehdi",
      dateNaissance: "01/01/1997",
      sexe: "M",
      cine: "BK623575",
      couverture: "CNOPS",
      derniereMiseAJour: "05/12/2023 12:45",
    },
    {
      date: "05/12/2023",
      nom: "Cherkaoui",
      prenom: "Mehdi",
      dateNaissance: "01/01/1997",
      sexe: "M",
      cine: "BK623575",
      couverture: "CNOPS",
      derniereMiseAJour: "05/12/2023 12:45",
    },
    {
      date: "05/12/2023",
      nom: "Cherkaoui",
      prenom: "Mehdi",
      dateNaissance: "01/01/1997",
      sexe: "M",
      cine: "BK623575",
      couverture: "CNOPS",
      derniereMiseAJour: "05/12/2023 12:45",
    },
    {
      date: "05/12/2023",
      nom: "Cherkaoui",
      prenom: "Mehdi",
      dateNaissance: "01/01/1997",
      sexe: "M",
      cine: "BK623575",
      couverture: "CNOPS",
      derniereMiseAJour: "05/12/2023 12:45",
    },
  ])
  const [filteredList, setFilteredList] = React.useState<any[]>([])

  React.useEffect(() => {
    setFilteredList(patients.filter(item =>
        item?.nom.toLowerCase().includes(searchTerm.toLowerCase())
        || item?.prenom.toLowerCase().includes(searchTerm.toLowerCase())
        || item?.cine.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm])

  useEffect(() => {
    const fetchPatients = async () => {
      let resp = await fetch('http://127.0.0.1:8080/patients');
      resp = await resp.json();
      console.log(resp);   
    }
    fetchPatients()
  },[])

  function handleFilter(e:any) {
    setSearchTerm(e.target.value)
  }

  const navigate = useNavigate();
  function goToDetails(id:any) {
    navigate('/patient/'+id)
  }
  
  return (
    <div className="flex flex-col gap-6">

      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-magnifying-glass" />
          <h1 className="text-xl font-bold">Recherche des patients</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <input
              type="text"
              className="w-80 rounded-full px-5 py-2 text-sm shadow-sm border-2 border-primary"
              placeholder="Recherche .."
              onChange={handleFilter}
            />
            <i className="fa fa-search text-neutral -ml-7"></i>
          </div>
          <button className="flex items-center gap-2 rounded-full shadow-lg px-5 py-2 border-2 border-primary text-primary font-semibold">
            <i className="fa fa-filter"></i>
            <span className="">Filter</span>
          </button>
        </div>
        <div className="">
          <Link to='/new-patient' className="flex items-center gap-2 rounded-full shadow-lg px-5 py-2 bg-gradient-to-br from-primary1 to-primary2 text-neutral2 font-semibold">
            <i className="fa fa-user-plus"></i>
            <span className="">Nouveau Dossier</span>
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date d'ouverture du dossier
              </th>
              <th scope="col" className="px-6 py-3">
                Nom
              </th>
              <th scope="col" className="px-6 py-3">
                Prenom
              </th>
              <th scope="col" className="px-6 py-3">
                Date de naissance
              </th>
              <th scope="col" className="px-6 py-3">
                Sexe
              </th>
              <th scope="col" className="px-6 py-3">
                N CINE
              </th>
              <th scope="col" className="px-6 py-3">
                Couverture
              </th>
              <th scope="col" className="px-6 py-3">
                Derinere mise a jour
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((item, index) => {
              return (
                <tr onClick={()=>goToDetails(item?.id)} className="cursor-pointer odd:bg-white even:bg-gray-50 border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item?.date}
                  </th>
                  <td className="px-6 py-4">{item?.nom}</td>
                  <td className="px-6 py-4">{item?.prenom}</td>
                  <td className="px-6 py-4">{item?.dateNaissance}</td>
                  <td className="px-6 py-4">{item?.sexe}</td>
                  <td className="px-6 py-4">{item?.cine}</td>
                  <td className="px-6 py-4">{item?.couverture}</td>
                  <td className="px-6 py-4">{item?.derniereMiseAJour}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">Previous</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</a>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
}
