import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string | null;
    altText?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, altText = "Image" }) => {
    if (!isOpen || !imageSrc) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-black/50 border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all z-10"
                        >
                            <X size={24} />
                        </button>
                        <img
                            src={imageSrc}
                            alt={altText}
                            className="w-full h-full object-contain max-h-[90vh]"
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ImageModal;
