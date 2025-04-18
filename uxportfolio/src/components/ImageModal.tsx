import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  caption?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, caption }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 4));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none z-10"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <div className="flex items-center gap-4 absolute top-4 left-4 z-10">
          <button
            className="bg-warmGray-800 text-white p-2 rounded-full hover:bg-warmGray-700 focus:outline-none"
            onClick={zoomIn}
          >
            <ZoomIn size={20} />
          </button>
          <button
            className="bg-warmGray-800 text-white p-2 rounded-full hover:bg-warmGray-700 focus:outline-none"
            onClick={zoomOut}
          >
            <ZoomOut size={20} />
          </button>
          <span className="text-white bg-warmGray-800 px-2 py-1 rounded-md">
            {Math.round(zoomLevel * 100)}%
          </span>
        </div>
        
        <div 
          className="overflow-hidden w-full h-full cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            {/* For the demo, we'll use a placeholder or the actual image */}
            {imageUrl.includes('warmGray') ? (
              <div className="bg-warmGray-200 flex items-center justify-center" style={{ width: '80%', height: '80%' }}>
                <p className="text-warmGray-500">Image placeholder (in production, actual image would display)</p>
              </div>
            ) : (
              <img 
                src={imageUrl} 
                alt={caption || "Full size image"} 
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
        </div>
        
        {caption && (
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white bg-warmGray-800 bg-opacity-70 inline-block px-4 py-2 rounded-md">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;