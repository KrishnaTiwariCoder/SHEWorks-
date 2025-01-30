import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Book, Scissors, Palette, Shirt, Circle, Brush } from 'lucide-react';

const ServicesPage = () => {
  const popularServices = [
    {
      title: 'Teaching',
      description: 'Share your knowledge and expertise in any subject area',
      icon: <Book className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Tailoring',
      description: 'Custom garment creation and alterations',
      icon: <Scissors className="w-6 h-6 text-purple-500" />,
    },
    {
      title: 'Painting',
      description: 'Professional painting services for all styles',
      icon: <Palette className="w-6 h-6 text-red-500" />,
    },
    {
      title: 'Fashion Designing',
      description: 'Create unique fashion pieces and collections',
      icon: <Shirt className="w-6 h-6 text-pink-500" />,
    },
    {
      title: 'Pottery Work',
      description: 'Handcrafted ceramic art and functional pieces',
      icon: <Circle className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'Craft Work',
      description: 'Custom handmade crafts and decorative items',
      icon: <Brush className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Create Button */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Available Services
          </h1>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Create Your Service
          </Button>
        </div>

        {/* Popular Services Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-300">Popular Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-700 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-100">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;