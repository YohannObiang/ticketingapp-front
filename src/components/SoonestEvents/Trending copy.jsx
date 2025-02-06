import React from "react";
import "./Trending.css";

export default function Trending({ item, Choose, choosenOne }) {
  // Image par défaut si aucune illustration n'est fournie
  const defaultImage = "https://ebillet.onrender.com/uploads/default.jpg";

  if (!choosenOne) {
    return (
      <div className="card" style={{ width: "100%", textAlign: "center", padding: "20px" }}>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div 
      className="card" 
      style={{ 
        backgroundImage: `url(${choosenOne.illustration ? `https://ebillet.onrender.com/uploads/${choosenOne.illustration}` : defaultImage})`, 
        width: "100%" 
      }}
    >
      <div className="card-content">
        <h3 className="card-title">{choosenOne.evenement || "Événement inconnu"}</h3>
        <p className="card-body">
          {choosenOne.date ? choosenOne.date : "Date non disponible"} <br />
          {choosenOne.lieu ? choosenOne.lieu : "Lieu non précisé"}
        </p>
        <button 
          className="button"
          onClick={() => Choose(item?.id_evenement)}
          style={{
            backgroundColor: "#6F3193",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          Voir billet(s)
        </button>
      </div>
    </div>
  );
}
