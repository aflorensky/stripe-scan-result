
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Camera, Image, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Scan = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleCameraCapture = () => {
    cameraInputRef.current?.click();
  };

  const handleGalleryUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const simulateScanning = () => {
    setIsScanning(true);
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      // Randomly decide success or failure for demo
      const isSuccess = Math.random() > 0.3;
      if (isSuccess) {
        navigate('/result/success');
      } else {
        navigate('/result/fail');
      }
    }, 3000);
  };

  const handleScan = () => {
    if (selectedFile) {
      simulateScanning();
    }
  };

  if (isScanning) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold mb-4">Анализируем тест...</h2>
            <p className="text-gray-600">
              Пожалуйста, подождите. Это займет несколько секунд.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">
              Выберите способ загрузки для теста на беременность
            </h1>
          </div>

          {previewUrl && (
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <img
                  src={previewUrl}
                  alt="Предварительный просмотр"
                  className="w-full h-48 object-contain rounded"
                />
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedFile(null);
                    setPreviewUrl(null);
                  }}
                  className="flex-1"
                >
                  Выбрать другое фото
                </Button>
                <Button
                  onClick={handleScan}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600"
                >
                  Сканировать
                </Button>
              </div>
            </div>
          )}

          {!previewUrl && (
            <div className="space-y-4 mb-8">
              <Button
                onClick={handleCameraCapture}
                className="w-full h-16 text-lg bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600"
              >
                <Camera className="h-6 w-6 mr-3" />
                Сделать фото
              </Button>
              
              <Button
                onClick={handleGalleryUpload}
                variant="outline"
                className="w-full h-16 text-lg border-2"
              >
                <Image className="h-6 w-6 mr-3" />
                Загрузить из галереи
              </Button>
            </div>
          )}

          <div className="text-center">
            <Link to="/scan/guide" className="text-sm text-gray-500 hover:text-gray-700 mr-4">
              Посмотреть инструкцию
            </Link>
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
              <ArrowLeft className="h-4 w-4 inline mr-1" />
              На главную
            </Link>
          </div>

          {/* Hidden file inputs */}
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="hidden"
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Scan;
