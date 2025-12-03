import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Facebook, Instagram } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    { id: 1, name: "Alice", role: "Marketing Strategist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" },
    { id: 2, name: "Courtney Henry", role: "Medical Assistant", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop" },
    { id: 3, name: "John Rai", role: "Marketing Strategist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop" },
  ];

  const [activeId, setActiveId] = useState<number>(team[0].id);
  const activeTeamMember = team.find(m => m.id === activeId) || team[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Team List */}
          <div>
            <div className="mb-12">
              <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-4 h-4 border border-primary flex items-center justify-center rounded-sm text-[10px]">🗓</span>
                Get to know the talented individuals who make it all happen
              </h4>
              <h2 className="text-5xl font-extrabold text-black">Meet Our Team</h2>
            </div>

            <div className="space-y-4">
              {team.map((member) => {
                const isActive = activeId === member.id;
                return (
                  <div
                    key={member.id}
                    className={`group flex cursor-pointer items-center justify-between rounded-2xl border p-6 transition-all ${
                      isActive 
                        ? 'border-primary bg-primary/5 shadow-md' 
                        : 'border-gray-200 bg-white hover:border-primary/50 hover:shadow-sm'
                    }`}
                    onClick={() => setActiveId(member.id)}
                  >
                    <div>
                      <h3 className={`text-lg font-bold transition-colors ${
                        isActive ? 'text-gray-900' : 'text-gray-900'
                      }`}>
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{member.role}</p>
                    </div>
                    <button
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                        isActive 
                          ? 'bg-primary text-white scale-110' 
                          : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
                      }`}
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Team Member Image */}
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src={activeTeamMember.image}
              alt={activeTeamMember.name}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
            
            {/* Social Media Icons */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;