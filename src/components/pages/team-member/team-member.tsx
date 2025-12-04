"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { TeamCard } from "./team-card";
import { useTeamMembers } from "@/hooks/pages/use-team-member";
import { TeamMember } from "@/types/pages/team";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const TeamMembers = () => {
  const { data: teamMembers, isLoading, error } = useTeamMembers();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Limit to 4 team members
  const displayedMembers = useMemo(() => teamMembers?.slice(0, 4) || [], [teamMembers]);

  // Set the first member as selected when data loads
  React.useEffect(() => {
    if (displayedMembers.length > 0 && !selectedMember) {
      setSelectedMember(displayedMembers[0]);
    }
  }, [displayedMembers, selectedMember]);

  if (isLoading) {
    return (
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <div className="container mx-auto grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <Skeleton className="mb-4 h-6 w-32" />
            <Skeleton className="mb-12 h-12 w-64" />
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
          </div>
          <Skeleton className="h-full w-full rounded-[40px]" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12">
        <Card className="border-destructive/50 bg-destructive/10">
          <CardContent className="py-12 text-center">
            <p className="text-destructive font-medium">
              Failed to load team members. Please try again later.
            </p>
          </CardContent>
        </Card>
      </section>
    );
  }

  if (!teamMembers || teamMembers.length === 0) {
    return (
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No team members found.</p>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
      {/* Background decoration lines */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden opacity-[0.03]">
        <svg width="100%" height="100%">
          <circle
            cx="0"
            cy="50%"
            r="40%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="0"
            cy="50%"
            r="50%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        {/* Left side - Team Cards */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary">
            <Users size={14} />
            <span className="font-sans">OUR TEAM</span>
          </div>
          <h2 className="mb-12 text-4xl leading-tight font-bold md:text-5xl text-foreground">
            Meet Our Team
          </h2>

          <div className="space-y-6">
            {displayedMembers.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                isActive={selectedMember?.id === member.id}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>

        {/* Right side - Member Image with Social Links */}
        <div className="relative h-full">
          <div className="relative h-full min-h-[500px] w-full overflow-hidden rounded-[40px] bg-muted">
            {selectedMember && (
              <Image
                src={selectedMember.photo}
                alt={selectedMember.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}

            {/* Social Links overlay */}
            {selectedMember && (selectedMember.facebook || selectedMember.instagram || selectedMember.linkedin || selectedMember.twitter || selectedMember.email) && (
              <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4 rounded-full bg-white/90 px-6 py-3 backdrop-blur-sm shadow-lg">
                {selectedMember.facebook && (
                  <a
                    href={selectedMember.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 transition-colors hover:text-blue-600"
                  >
                    <Facebook size={18} />
                  </a>
                )}
                {selectedMember.instagram && (
                  <a
                    href={selectedMember.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 transition-colors hover:text-pink-600"
                  >
                    <Instagram size={18} />
                  </a>
                )}
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 transition-colors hover:text-blue-700"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {selectedMember.twitter && (
                  <a
                    href={selectedMember.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 transition-colors hover:text-black"
                  >
                    <Twitter size={18} />
                  </a>
                )}
                {selectedMember.email && (
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="text-gray-700 transition-colors hover:text-red-500"
                  >
                    <Mail size={18} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

