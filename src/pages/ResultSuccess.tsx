
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Share2, Download, Camera, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ResultSuccess = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    // Show success toast or message
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Результат теста',
        text: 'Посмотрите мой результат теста на беременность',
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleDownload = () => {
    // Simulate download functionality
    console.log("Downloading result...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 text-center">
            <CheckCircle className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Результат готов!</h1>
            <p className="text-green-100">Тест успешно распознан</p>
          </div>

          {/* Result Content */}
          <div className="p-6">
            {/* Photo */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Ваше фото:</h3>
              <div className="bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-center">Фото теста</p>
              </div>
            </div>

            {/* Result */}
            <Card className="mb-6 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  Результат: Положительный
                </h3>
                <p className="text-gray-700 mb-4">
                  На тесте обнаружены две полоски, что указывает на положительный результат теста на беременность.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-gray-600">
                    <strong>Важно:</strong> Этот результат является предварительным. 
                    Для получения официального диагноза обратитесь к врачу.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Button
                variant="outline"
                onClick={handleDownload}
                className="flex items-center justify-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Сохранить
              </Button>
              <Button
                variant="outline"
                onClick={handleShare}
                className="flex items-center justify-center"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Поделиться
              </Button>
              <Link to="/scan">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600">
                  <Camera className="h-4 w-4 mr-2" />
                  Сканировать ещё
                </Button>
              </Link>
            </div>

            {/* Email Feedback Form */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Mail className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Поделись, как прошло сканирование
                    </h4>
                    <p className="text-sm text-blue-700 mb-4">
                      Твой отзыв поможет нам улучшить сервис
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
                    Получить опрос
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-4 text-center">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSuccess;
