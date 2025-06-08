
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, Camera, Sun, Focus, Square, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ScanGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showGuideNext, setShowGuideNext] = useState(true);
  const navigate = useNavigate();

  const steps = [
    {
      icon: <Square className="h-16 w-16 text-blue-500" />,
      title: "Только тест «Будьте уверены»",
      content: "Сервис работает только с тестами линейки «Будьте уверены». Другие тесты не распознаются."
    },
    {
      icon: <Sun className="h-16 w-16 text-yellow-500" />,
      title: "Хорошее освещение",
      content: "Убедитесь, что тест хорошо освещен. Избегайте теней и слишком яркого света."
    },
    {
      icon: <Focus className="h-16 w-16 text-green-500" />,
      title: "Четкое фото",
      content: "Сделайте четкое фото без размытия. Держите телефон неподвижно при съемке."
    },
    {
      icon: <Square className="h-16 w-16 text-gray-500" />,
      title: "Белый фон",
      content: "Поместите тест на белый или светлый фон для лучшего контраста."
    },
    {
      icon: <Eye className="h-16 w-16 text-purple-500" />,
      title: "Съёмка строго сверху",
      content: "Фотографируйте тест строго сверху, держа телефон параллельно поверхности."
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStartScanning = () => {
    if (!showGuideNext) {
      localStorage.setItem('hideGuide', 'true');
    }
    navigate('/scan');
  };

  useEffect(() => {
    const hideGuide = localStorage.getItem('hideGuide');
    if (hideGuide === 'true') {
      navigate('/scan');
    }
  }, [navigate]);

  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              {steps[currentStep].icon}
            </div>
            <h2 className="text-2xl font-bold mb-4">{steps[currentStep].title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {steps[currentStep].content}
            </p>
          </div>

          <div className="flex justify-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep ? 'bg-blue-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <div className="space-y-4">
            {!isLastStep ? (
              <div className="flex justify-between space-x-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="flex-1"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Назад
                </Button>
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600"
                >
                  Далее
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Button
                  onClick={handleStartScanning}
                  className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-lg py-3"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Перейти к сканированию
                </Button>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Checkbox
                    id="hideGuide"
                    checked={!showGuideNext}
                    onCheckedChange={(checked) => setShowGuideNext(!checked)}
                  />
                  <label htmlFor="hideGuide" className="cursor-pointer">
                    Не показывать обучение в следующий раз
                  </label>
                </div>
                
                <p className="text-xs text-gray-500 italic">
                  Ты всегда можешь открыть инструкцию снова
                </p>
              </div>
            )}
          </div>

          <div className="mt-6">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanGuide;
