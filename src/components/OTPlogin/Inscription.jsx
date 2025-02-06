import React, { useState } from 'react';
import axios from 'axios';

function Inscription() {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://ebillet.onrender.com/inscription', { email, motDePasse });
      alert(response.data.message);
    } catch (error) {
      console.log(error.response?.data?.message || 'Erreur lors de l\'inscription');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={motDePasse}
        onChange={(e) => setMotDePasse(e.target.value)}
        required
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default Inscription;
