import React from 'react';
import { X } from 'lucide-react';
import { MenuItem } from '../types/api';

interface ModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ item, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#E66767]">{item.nome}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <img src={item.foto} alt={item.nome} className="w-full md:w-1/2 rounded-lg" />
            <div>
              <p className="text-gray-700 mb-4">{item.descricao}</p>
              <p className="text-gray-600 mb-4">Serve: {item.porcao}</p>
              <div className="flex justify-between items-center">
                <span className="text-[#E66767] text-xl font-bold">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(item.preco)}
                </span>
                <button className="bg-[#E66767] text-white px-6 py-2 rounded-lg hover:bg-[#d45555]">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}