
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhyCCID = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🌟 Why Choose CCID?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your success is our purpose—here's how we make it happen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🌍</span>
              </div>
              <CardTitle className="text-2xl">Global Network</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                Access to universities and companies worldwide through our extensive partner network
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">📚</span>
              </div>
              <CardTitle className="text-2xl">Expert Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                Professional counseling and support throughout your application and program journey
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <CardTitle className="text-2xl">Career Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                Programs designed to enhance your career prospects and professional development
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyCCID;
