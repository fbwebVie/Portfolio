"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xqedbqod", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <section id="contact" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Связаться со мной</h2>
        <div className="max-w-md mx-auto">
          {submitted ? (
            <div className="text-center py-10">
              <p className="text-4xl mb-4">✉️</p>
              <p className="text-lg font-medium mb-2">Сообщение отправлено!</p>
              <p className="text-sm text-gray-400">
                Отвечу в течение 24 часов
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-gray-500 underline hover:text-black transition-colors"
              >
                Отправить ещё
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Ваше имя"
                className="px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-900 transition-colors bg-white"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-900 transition-colors bg-white"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Сообщение"
                className="px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-900 transition-colors resize-none bg-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Отправить
              </button>
            </form>
          )}

          <div className="mt-10 text-center text-sm text-gray-400 space-y-2">
            <p>Или напишите мне напрямую:</p>
            <div className="flex justify-center gap-6 text-gray-600">
              <a
                href="https://t.me/@taisiafb"
                target="_blank"
                className="hover:text-black transition-colors"
              >
                Telegram
              </a>
              <a
                href="mailto:fedotofftb@gmail.com"
                className="hover:text-black transition-colors"
              >
                Email
              </a>
              <a
                href="https://kwork.ru/user/tb_fedotova"
                target="_blank"
                className="hover:text-black transition-colors"
              >
                Kwork
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}