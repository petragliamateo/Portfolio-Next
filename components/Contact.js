/* eslint-disable no-alert */
import React from 'react';
import {
  setDoc, doc, getFirestore,
} from 'firebase/firestore';
import { app } from './firebase';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    Name: '', Email: '', Message: '',
  });
  const [loading, setLoading] = React.useState(false);
  const inputStyle = 'mx-10 mb-5 h-10 bg-dark-2 text-white p-5 outline-dark-3 caret-dark-6';

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    // Creo ID mediante Date:
    const date = new Date();
    const dateF = date.toString().split(' ');
    const dateMes = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const fecha = `${dateF[3]}-${dateMes}-${dateF[2]}-${dateF[4]}`;
    const dateID = `${fecha.replaceAll('-', '')}-${Math.floor(Math.random() * 1000)}`;

    // Subo el contacto a firebase:
    const db = getFirestore(app);
    const coll = doc(db, 'contacts', dateID);
    // eslint-disable-next-line no-unused-vars
    const setRef = setDoc(coll, {
      name: formData.Name,
      email: formData.Email,
      message: formData.Message,
      fecha,
    })
      .then(() => {
        window.alert('👍 Mensaje enviado. Gracias por contactarte 👍');
        setFormData({ Name: '', Email: '', Message: '' });
        setLoading(false);
      })
      .catch((error) => {
        window.alert(error.message);
        setLoading(false);
      });
  }

  function handleChange(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="w-full bg-dark-4 flex flex-col" id="contact">

      <form
        onSubmit={handleSubmit}
        className="flex flex-col self-center w-4/5 max-w-xl bg-dark-1
                            my-16 shadow-xl"
      >

        <h1 className="self-center my-12 text-3xl font-semibold text-gray-300">Contacto</h1>

        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="Name"
          value={formData.Name}
          required
          className={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="Email"
          value={formData.Email}
          required
          className={inputStyle}
        />

        <textarea
          placeholder="Message"
          onChange={handleChange}
          name="Message"
          value={formData.Message}
          className={`${inputStyle} h-64`}
        />

        <button type="submit" className="btn btn-dark border-dark-3 active:border-dark-4">
          {loading ? 'Sending..' : 'Submit'}
        </button>

      </form>

    </div>
  );
}
