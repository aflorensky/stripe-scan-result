
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Smartphone, Zap, Shield, DollarSign, Camera, ArrowRight, Star, Heart, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Я смотрела на тест и не могла понять беременна я или нет, а потом загрузила фото и получила ответ что я беременна 🥰",
      author: "Анна, 28 лет"
    },
    {
      text: "Несколько тестов показали слабые полоски. Скан показал отрицательно. Врач подтвердил — не беременна, чему я была рада!",
      author: "Марина, 33 года"
    },
    {
      text: "Второй месяц отслеживаю пики овуляции для зачатия. Пока всё нравится.",
      author: "Екатерина, 30 лет"
    }
  ];

  const developmentFeatures = [
    "Поддержка новых тестов",
    "Расшифровка по дням цикла", 
    "Календарь результатов",
    "Экспорт в PDF",
    "Напоминания"
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Не гадай по полоскам — узнай точно
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Мы поможем понять, есть ли вторая полоска и что она значит в твоем случае
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Smartphone className="h-8 w-8 text-blue-500 mb-2" />
              <span className="text-sm font-medium">С телефона</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Zap className="h-8 w-8 text-yellow-500 mb-2" />
              <span className="text-sm font-medium">За минуту</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <Shield className="h-8 w-8 text-green-500 mb-2" />
              <span className="text-sm font-medium">Безопасно</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <DollarSign className="h-8 w-8 text-purple-500 mb-2" />
              <span className="text-sm font-medium">Бесплатно</span>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-8 mb-6 border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">Поле под интерфейс</p>
          </div>

          <Link to="/scan/guide">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white px-8 py-3 text-lg">
              Сканировать тест
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <p className="text-sm text-gray-500 mt-4 italic">
            Мы не ставим медицинский диагноз. Его можно получить только у врача.
          </p>
        </div>
      </section>

      {/* Why Important Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Результат теста не должен быть источником тревоги
            </h2>
            <p className="text-xl text-gray-600">
              Мы знаем, как сложно бывает понять результат — особенно, когда это важно.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 mb-2">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                      — {testimonials[currentTestimonial].author}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Test Support Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Сервис работает только с тестами<br />
              «Будьте уверены»
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="bg-gray-100 rounded-lg p-8 mb-4 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-center">Тест на беременность</p>
              </div>
              <div className="flex items-center mb-4">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="font-medium">Поддерживает</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="outline">Wildberries</Badge>
                <Badge variant="outline">Ozon</Badge>
                <Badge variant="outline">Яндекс.Маркет</Badge>
                <Badge variant="outline">ЕАПТЕКА</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <div className="bg-gray-100 rounded-lg p-8 mb-4 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-center">Тест на овуляцию</p>
              </div>
              <div className="flex items-center mb-4">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="font-medium">Поддерживает</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="outline">Wildberries</Badge>
                <Badge variant="outline">Ozon</Badge>
                <Badge variant="outline">Яндекс.Маркет</Badge>
                <Badge variant="outline">ЕАПТЕКА</Badge>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <div className="flex items-center justify-center text-amber-600">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <span className="text-sm italic">Если вы используете тест другой линейки...</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Сканирование в 3 простых шага
            </h2>
            <p className="text-xl text-gray-600">
              Всё происходит прямо в браузере — быстро, безопасно и без регистрации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Сделайте фото теста</h3>
              <p className="text-gray-600">Фото</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Нажмите "Сканировать"</h3>
              <p className="text-gray-600">Сканирование</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Узнайте результат</h3>
              <p className="text-gray-600">Результат</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Безопасность и приватность — наш приоритет
          </h2>
          
          <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-12 w-12 text-green-600" />
          </div>

          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Вам не нужно вводить данные. Просто результат — и всё.
          </p>

          <p className="text-sm text-gray-500 italic">
            Сервис не сохраняет фото и не собирает персональные данные.
          </p>
        </div>
      </section>

      {/* Development Plan Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              У нас есть план развития — и ты можешь на него повлиять
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Расскажи, что тебе нужно — мы постараемся это реализовать
            </p>
            
            <div className="text-left max-w-md mx-auto mb-8">
              {developmentFeatures.map((feature, index) => (
                <div key={index} className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-lg font-medium mb-6">
              Оставь email — и мы узнаем у тебя, что ты хочешь в следующем обновлении
            </p>

            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600">
                Подписаться
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Остались вопросы?</h3>
            <p className="text-gray-400 mb-4">support@test-scanner.ru</p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-gray-800 border-gray-700"
              />
              <Button type="submit" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Подписаться на новости
              </Button>
            </form>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Сканер тестов. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
