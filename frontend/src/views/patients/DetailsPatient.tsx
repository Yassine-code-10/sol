import React from "react";

export default function DetailsPatient() {
  const singlePatient:any = {
    nom: 'Mansar',
    prenom: 'Manal',
    dateNaissance: '22/12/1998',
    sexe: 'Femme',
    cine: 'BK625487',
    couverture: 'CNOPS',
    region: 'Casa-settat',
    ville: 'Casablanca',
    commune: 'Anfa',
    tel: '0658742154',
    adresse: '93 Rue Meskellile, Casablanca 20250',
    compAdresse: '93 Rue Meskellile, Casablanca 20250'
  }

  return (
    <div className="flex flex-col gap-6">

      <div className="flex items-center gap-6 justify-between shadow-lg p-6 border">

        <div className="flex items-center gap-6">
          <div className="relative">
            <i className="absolute top-0 right-0 fa fa-edit"></i>
            <img
              src={require("../../assets/images/user-avatar.png")}
              alt=""
              className="w-20"
            />
          </div>
          <div className="">
            <h1 className="font-semibold">{singlePatient?.prenom +' '+ singlePatient?.nom}</h1>
            <h2 className="">Sexe : <span className="text-primary">{singlePatient?.sexe}</span></h2>
          </div>
          <div className="">
            <h2 className="">Date de naissance : <span className="text-primary">{singlePatient?.dateNaissance}</span></h2>
            <h2 className="">Age : <span className="text-primary">{singlePatient?.age}</span></h2>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 rounded-full shadow-lg px-5 py-2 bg-secondary text-neutral2 font-semibold">
            <i className="fa fa-user-plus"></i>
            <span className="">Reserver un rendez-vous</span>
          </button>
          <button className="flex items-center gap-2 rounded-full shadow-lg px-5 py-2 bg-gradient-to-br from-primary1 to-primary2 text-neutral2 font-semibold">
            <i className="fa fa-user-plus"></i>
            <span className="">Demarrer la consulation</span>
          </button>
        </div>

      </div>

      <div className="grid grid-cols-4 gap-3">
        <div className="px-6 py-5 text-center shadow-lg bg-primary text-neutral2 font-semibold">Fiche patient</div>
        <div className="px-6 py-5 text-center shadow-lg bg-primary-50 text-primary font-semibold">Antecedents</div>
        <div className="px-6 py-5 text-center shadow-lg bg-primary-50 text-primary font-semibold">Constantes</div>
        <div className="px-6 py-5 text-center shadow-lg bg-primary-50 text-primary font-semibold">Compte rendu</div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-primary text-xl">Patient</h1>
          <button className="flex items-center gap-2 rounded-full shadow-lg px-5 py-2 bg-secondary text-neutral2 font-semibold">
            <i className="fa fa-edit"></i>
            <span className="">Modifier</span>
          </button>
        </div>
        <div className="grid grid-cols-5 p-6 gap-3">
          <div className="grid p-3">
            <span className="text-sm text-secondary font-semibold">CINE : </span>
            <span className="">{singlePatient?.cine}</span>
          </div>
          <div className="grid  p-3">
            <span className="text-sm text-secondary font-semibold">Nom : </span>
            <span className="">{singlePatient?.nom}</span>
          </div>
          <div className="grid p-3">
            <span className="text-sm text-secondary font-semibold">Prenom : </span>
            <span className="">{singlePatient?.prenom}</span>
          </div>
          <div className="grid p-3">
            <span className="text-sm text-secondary font-semibold">Sexe : </span>
            <span className="">{singlePatient?.sexe}</span>
          </div>
          <div className="grid p-3">
            <span className="text-sm text-secondary font-semibold">Date de naissance : </span>
            <span className="">{singlePatient?.dateNaissance}</span>
          </div>
          <div className="grid p-3">
            <span className="text-sm text-secondary font-semibold">Couverture : </span>
            <span className="">{singlePatient?.couverture}</span>
          </div>
          <div className="grid p-3">
            <span className="text-sm text-secondary font-semibold">Region : </span>
            <span className="">{singlePatient?.region}</span>
          </div>
          <div className="grid p-3">
            <span className="text-sm text-secondary font-semibold">Ville : </span>
            <span className="">{singlePatient?.ville}</span>
          </div>
          <div className="col-span-2 grid p-3">
            <span className="text-sm text-secondary font-semibold">Commune : </span>
            <span className="">{singlePatient?.commune}</span>
          </div>
          <div className="grid p-3">
            <span className="text-sm text-secondary font-semibold">Telephone mobile : </span>
            <span className="">{singlePatient?.tel}</span>
          </div>
          <div className="col-span-2 grid p-3">
            <span className="text-sm text-secondary font-semibold">adresse : </span>
            <span className="">{singlePatient?.adresse}</span>
          </div>
          <div className="col-span-2 grid p-3">
            <span className="text-sm text-secondary font-semibold">Complement adresse : </span>
            <span className="">{singlePatient?.compAdresse}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
