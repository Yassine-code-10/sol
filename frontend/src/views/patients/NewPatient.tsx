import React from "react";

export default function NewPatient() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <i className="fa fa-folder-plus text-primary"></i>
        <h1 className="font-bold text-2xl text-secondary">Nouveau dossier</h1>
      </div>

      <h1 className="font-bold text-primary text-xl">Patient</h1>
      <div className="grid grid-cols-4 gap-x-6 gap-y-4">
        <div className="grid gap-2">
          <span className="text-sm text-secondary font-semibold">CINE : </span>
          <input
            type="text"
            className="px-5 py-2 rounded-lg border border-gray-300"
            placeholder="BK625487"
          />
        </div>
        <div className="grid gap-2">
          <span className="text-sm text-secondary font-semibold">Nom : </span>
          <input
            type="text"
            className="px-5 py-2 rounded-lg border border-gray-300"
            placeholder="Mehdi"
          />
        </div>
        <div className="grid gap-2">
          <span className="text-sm text-secondary font-semibold">
            Prenom :{" "}
          </span>
          <input
            type="text"
            className="px-5 py-2 rounded-lg border border-gray-300"
            placeholder="Mehdi"
          />
        </div>
        <div className="grid gap-2">
          <span className="text-sm text-secondary font-semibold">Sexe : </span>
          <select className="px-5 py-2 rounded-lg border border-gray-300">
            <option value="H">Homme</option>
            <option value="F">Femme</option>
          </select>
        </div>
        <div className="grid gap-2">
          <span className="text-sm text-secondary font-semibold">
            Date de naissance :{" "}
          </span>
          <div className="flex items-center gap-2">
            <input
              type="date"
              className="w-full px-5 py-2 rounded-lg border border-gray-300"
              placeholder="14/08/1997"
            />
            <span className="w-24 px-3 py-2 bg-secondary rounded-lg text-neutral2">25 ans</span>
          </div>
        </div>
        <div className="grid gap-2">
          <span className="text-sm text-secondary font-semibold">Couverture : </span>
          <select className="px-5 py-2 rounded-lg border border-gray-300">
            <option value="cnops">CNOPS</option>
            <option value="cnss">CNSS</option>
          </select>
        </div>
        <div className="grid gap-2">
          <span className="text-sm text-secondary font-semibold">Region : </span>
          <input
            type="text"
            className="px-5 py-2 rounded-lg border border-gray-300"
            placeholder="Casa-Settat"
          />
        </div>
        <div className="grid gap-2">
          <span className="text-sm text-secondary font-semibold">Ville : </span>
          <input
            type="text"
            className="px-5 py-2 rounded-lg border border-gray-300"
            placeholder="Casablanca"
          />
        </div>
        <div className="grid gap-2">
          <span className="text-sm text-secondary font-semibold">Commune : </span>
          <input
            type="text"
            className="px-5 py-2 rounded-lg border border-gray-300"
            placeholder="Maarif"
          />
        </div>
        <div className="grid gap-2">
          <span className="text-sm text-secondary font-semibold">Telephone mobile : </span>
          <input
            type="text"
            className="px-5 py-2 rounded-lg border border-gray-300"
            placeholder="0654287455"
          />
        </div>
        <div className="col-span-2 grid gap-2">
          <span className="text-sm text-secondary font-semibold">Adresse : </span>
          <input
            type="text"
            className="px-5 py-2 rounded-lg border border-gray-300"
            placeholder="29 Rue Meskellil Casablanca 20250"
          />
        </div>
        <div className="col-span-4 grid gap-2">
          <span className="text-sm text-secondary font-semibold">Complement adresse : </span>
          <input
            type="text"
            className="px-5 py-2 rounded-lg border border-gray-300"
            placeholder="29 Rue Meskellil Casablanca 20250"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button className="flex items-center gap-2 rounded-lg shadow-lg px-10 py-2 bg-gray-200 text-gray-500 font-semibold">
          <span className="">Annuler</span>
        </button>
        <button className="flex items-center gap-2 rounded-lg shadow-lg px-20 py-2 bg-primary text-neutral2 font-semibold">
          <span className="">Terminer</span>
        </button>
      </div>
    </div>
  );
}
