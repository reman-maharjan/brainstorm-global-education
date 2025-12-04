import React from "react";
import { ArrowRight } from "lucide-react";
import { TeamMember } from "@/types/pages/team";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  member: TeamMember;
  isActive?: boolean;
  onClick?: () => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  member,
  isActive,
  onClick,
}) => {
  return (
    <Card
      className={cn(
        "group flex cursor-pointer items-center justify-between p-6 shadow-sm transition-all duration-300 hover:shadow-md",
        isActive 
          ? "border-primary bg-primary/5" 
          : "border-border bg-card hover:border-primary/30"
      )}
      onClick={onClick}
    >
      <div className="flex-1">
        <h4 className="text-lg font-bold text-foreground">{member.name}</h4>
        <p className="mt-1 text-sm text-muted-foreground font-sans">
          {member.role}
        </p>
      </div>
      <Button
        size="icon"
        variant="outline"
        className={cn(
          "h-10 w-10 rounded-full transition-all duration-300",
          isActive 
            ? "bg-background text-primary-foreground hover:bg-primary/90" 
            : "bg-secondary/20 text-secondary hover:bg-secondary/30"
        )}
      >
        <ArrowRight size={16} />
      </Button>
    </Card>
  );
};
