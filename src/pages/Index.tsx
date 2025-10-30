import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      title: "Проектирование участка",
      description: "Создаём уникальный проект с учётом особенностей вашего участка, климата и пожеланий",
      icon: "PenTool"
    },
    {
      title: "Озеленение территории",
      description: "Подбираем и высаживаем растения, создаём газоны, цветники и живые изгороди",
      icon: "Trees"
    },
    {
      title: "Благоустройство",
      description: "Создаём дорожки, площадки, малые архитектурные формы и зоны отдыха",
      icon: "Hammer"
    },
    {
      title: "Системы полива",
      description: "Проектируем и монтируем автоматические системы полива для вашего участка",
      icon: "Droplets"
    },
    {
      title: "Освещение участка",
      description: "Разрабатываем световые решения для комфорта и безопасности в тёмное время",
      icon: "Lightbulb"
    },
    {
      title: "Уход и обслуживание",
      description: "Регулярный уход за садом: стрижка, подкормка, сезонные работы",
      icon: "Wrench"
    }
  ];

  const benefits = [
    {
      title: "Опыт 10+ лет",
      description: "Реализовали более 200 проектов",
      icon: "Award"
    },
    {
      title: "Гарантия качества",
      description: "Даём гарантию на все виды работ",
      icon: "ShieldCheck"
    },
    {
      title: "Индивидуальный подход",
      description: "Учитываем все ваши пожелания",
      icon: "Heart"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/07bbb84e-5ce5-49a5-8eb5-ec4646602e67/files/f800b91e-7b90-4972-851d-8530507e3b49.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ландшафтный дизайн вашей мечты
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Создаём гармоничные пространства для жизни и отдыха
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Получить консультацию
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр работ по созданию и обслуживанию вашего идеального сада
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          
          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (900) 000-00-00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Ландшафтный дизайн. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
