"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Upload, X, Check } from "lucide-react";

interface ProfileUploadProps {
  size?: number;
  className?: string;
}

export default function ProfileUpload({
  size = 180,
  className = "",
}: ProfileUploadProps) {
  const [image, setImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const removeImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  return (
    <div className={`relative group ${className}`}>
      {/* Ambient glow behind avatar */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-700"
        style={{
          background: image
            ? "radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
          transform: "scale(1.4)",
          filter: "blur(20px)",
        }}
      />

      {/* Decorative ring */}
      <motion.div
        className="absolute inset-[-3px] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #c9a96e, transparent 40%, transparent 60%, #c9a96e)",
          opacity: isDragging ? 1 : 0.4,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Main container */}
      <motion.div
        className="relative cursor-pointer overflow-hidden rounded-full border-2 transition-all duration-500"
        style={{
          width: size,
          height: size,
          borderColor: isDragging
            ? "rgba(201,169,110,0.6)"
            : image
            ? "rgba(201,169,110,0.2)"
            : "rgba(255,255,255,0.06)",
          background: image ? "transparent" : "#0e0e11",
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <AnimatePresence mode="wait">
          {image ? (
            <motion.div
              key="image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <img
                src={image}
                alt="Profile photo of Indiser"
                className="w-full h-full object-cover"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="w-6 h-6 text-white/80" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col items-center justify-center gap-2"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(201,169,110,0.06) 0%, transparent 70%)",
              }}
            >
              <motion.div
                animate={isDragging ? { scale: 1.2, y: -4 } : { scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Upload
                  className="w-7 h-7 transition-colors duration-300"
                  style={{ color: isDragging ? "#c9a96e" : "#5a5a5e" }}
                />
              </motion.div>
              <span
                className="text-[10px] font-medium tracking-wider uppercase transition-colors duration-300"
                style={{ color: isDragging ? "#c9a96e" : "#5a5a5e" }}
              >
                {isDragging ? "Drop here" : "Upload"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success indicator */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "rgba(201,169,110,0.2)" }}
              >
                <Check className="w-6 h-6" style={{ color: "#c9a96e" }} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Remove button */}
      <AnimatePresence>
        {image && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={removeImage}
            className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 transition-all z-10"
            aria-label="Remove profile picture"
          >
            <X className="w-3.5 h-3.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hidden input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        id="profile-upload"
        aria-label="Upload profile picture"
      />
    </div>
  );
}
