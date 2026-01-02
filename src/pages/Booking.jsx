import React from 'react';
import Footer from '../components/Footer';

const Booking = () => (
  <div className="frame booking-page">
    <div className="booking-content">
      <h1 className="title">🎶 Mes prestations</h1>
      <section>
        <h2>🍸 Bars & Établissements</h2>
        <p>Animation musicale régulière ou ponctuelle</p>
        <p>Ambiance adaptée à votre clientèle</p>
        <p>Styles variés : hits actuels, généraliste, années 80/90/2000, électro, urbain, latino, etc.</p>
        <p>Matériel son et lumière professionnel</p>
      </section>

      <section>
        <h2>🏢 Soirées d’entreprise</h2>
        <p>Afterwork, soirée du personnel, séminaire, inauguration</p>
        <p>Ambiance élégante ou festive selon vos besoins</p>
        <p>Coordination avec vos temps forts (discours, animations)</p>
      </section>

      <section>
        <h2>💍 Soirées privées</h2>
        <p>Mariage : vin d’honneur, repas, soirée dansante</p>
        <p>Anniversaire, fête privée, EVG/EVJF</p>
        <p>Playlist personnalisée selon vos goûts</p>
        <p>Animation micro possible (sobre et efficace)</p>
      </section>

      <section>
        <h2>✅ Pourquoi me faire confiance ?</h2>
        <ul>
          <li>DJ généraliste expérimenté</li>
          <li>Lecture du public et adaptation en temps réel</li>
          <li>Matériel professionnel (son & lumières)</li>
          <li>Sérieux, ponctualité et bonne humeur</li>
          <li>Prestation sur mesure, sans playlist imposée</li>
        </ul>
      </section>

      <section>
        <h2>📩 Demande de devis & contact</h2>
        <p>Parlez-moi de votre projet :</p>
        <ul>
          <li>Type d’événement</li>
          <li>Date et lieu</li>
          <li>Nombre de personnes</li>
          <li>Ambiance souhaitée</li>
        </ul>
        <p>Je vous répondrai rapidement avec une proposition personnalisée.</p>
        <p>👉 <strong>Contactez-moi dès maintenant</strong></p>
        <p>📧 Email : <a href="mailto:dj.lex.music.79@gmail.com">dj.lex.music.79@gmail.com</a></p>
        <p>📍 Zone d’intervention : Nouvelle-Aquitaine, France entière sur demande</p>
      </section>
    </div>
    <Footer />
  </div>
);

export default Booking;
