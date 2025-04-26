
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah J.",
      avatar: "S",
      rating: 5,
      text: "I've been shopping here for all my quilting supplies. The quality is outstanding and customer service is always helpful!",
      project: "Quilt Making"
    },
    {
      id: 2,
      name: "Michael T.",
      avatar: "M",
      rating: 5,
      text: "The patterns I bought were easy to follow and produced professional results. Will definitely be coming back!",
      project: "Clothing Design"
    },
    {
      id: 3,
      name: "Emily L.",
      avatar: "E",
      rating: 5,
      text: "The workshop I attended was extremely informative and fun. The instructor was knowledgeable and patient.",
      project: "Embroidery"
    }
  ];

  return (
    <section className="py-16 bg-craft-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-script text-2xl mb-2">Testimonials</h2>
          <h3 className="text-3xl font-bold text-foreground">From Our Community</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            See what our customers are creating with our products and what they have to say about their experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-craft-teal text-white flex items-center justify-center font-semibold text-lg mr-3">
                        {review.avatar}
                      </div>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.project}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-foreground italic">"{review.text}"</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Verified Purchase</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="text-craft-teal hover:text-craft-teal/70 transition-colors font-medium">
            Read more customer reviews →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
