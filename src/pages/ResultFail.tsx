
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Camera, Mail, Lightbulb } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ResultFail = () => {
  const [email, setEmail] = useState("");
  const [attemptCount, setAttemptCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Get attempt count from localStorage
    const count = parseInt(localStorage.getItem('failAttempts') || '0') + 1;
    setAttemptCount(count);
    localStorage.setItem('failAttempts', count.toString());

    // Redirect to guide after 3 failed attempts
    if (count >= 3) {
      setTimeout(() => {
        localStorage.removeItem('failAttempts');
        navigate('/scan/guide');
      }, 5000);
    }
  }, [navigate]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const handleTryAgain = () => {
    if (attemptCount >= 3) {
      navigate('/scan/guide');
    } else {
      navigate('/scan');
    }
  };

  const failureReasons = [
    "Недостаточное освещение",
    "Размытое изображение", 
    "Тест не полностью в кадре",
    "Неподходящий фон",
    "Неправильный угол съемки"
  ];

  const tips = [
    "Используйте естественное освещение или яркую лампу",
    "Держите телефон неподвижно при съемке",
    "Убедитесь, что весь тест помещается в кадр",
    "Положите тест на белую поверхность",
    "Фотографируйте строго сверху"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Не удалось распознать</h1>
            <p className="text-red-100">Попытка {attemptCount} из 3</p>
          </div>

          {/* Content */}
          <div className="p-6">
            {attemptCount >= 3 && (
              <Card className="mb-6 border-orange-200 bg-orange-50">
                <CardContent className="p-4">
                  <p className="text-orange-800 font-medium text-center">
                    После 3 неудачных попыток мы покажем вам подробную инструкцию
                  </p>
                  <p className="text-sm text-orange-600 text-center mt-2">
                    Перенаправление через 5 секунд...
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Possible Reasons */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Возможные причины:
              </h3>
              <ul className="space-y-2">
                {failureReasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                Советы для улучшения результата:
              </h3>
              <ul className="space-y-2">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <div className="mb-8">
              <Button
                onClick={handleTryAgain}
                className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-lg py-3"
              >
                <Camera className="h-5 w-5 mr-2" />
                {attemptCount >= 3 ? 'Посмотреть инструкцию' : 'Попробовать снова'}
              </Button>
            </div>

            {/* Email Feedback Form */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Mail className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Расскажите о проблеме
                    </h4>
                    <p className="text-sm text-blue-700 mb-4">
                      Ваш отзыв поможет нам улучшить распознавание
                    </p>
                  </div>
                </div>
                
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-4 text-center">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 mr-4">
              ← Вернуться на главную
            </Link>
            <Link to="/scan/guide" className="text-sm text-blue-500 hover:text-blue-700">
              Посмотреть инструкцию
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultFail;
