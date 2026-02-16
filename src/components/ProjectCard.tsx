"use client";

import { useState } from "react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition-colors">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden cursor-zoom-in"
        >
          <span className="text-4xl">🖥️</span>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-white/90 px-3 py-1.5 rounded-full text-gray-600">
              Нажми чтобы увеличить
            </span>
          </div>
        </button>

        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              className="text-sm font-medium hover:text-gray-500 transition-colors"
            >
              Демо ↗
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
            >
              Код ↗
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 md:p-10 overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-4 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-black transition-colors shadow-lg"
          >
            ✕
          </button>

          <div
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-1">
                Прокрутите вниз чтобы увидеть весь сайт
              </p>
            </div>

            <div className="overflow-y-auto max-h-[70vh]">
              <div className="bg-gradient-to-b from-gray-50 to-gray-200 p-10 space-y-8">
                <div className="h-40 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-300">
                  Шапка сайта
                </div>
                <div className="h-60 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-300">
                  Hero секция
                </div>
                <div className="h-40 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-300">
                  О компании
                </div>
                <div className="h-48 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-300">
                  Услуги
                </div>
                <div className="h-40 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-300">
                  Контакты
                </div>
                <div className="h-20 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-300">
                  Футер
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Открыть демо ↗
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                className="px-6 py-2.5 border border-gray-300 text-sm font-medium rounded-full hover:border-gray-900 transition-colors"
              >
                Смотреть код ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}