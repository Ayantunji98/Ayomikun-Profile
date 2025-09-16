import React from "react";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
export { Card, CardHeader, CardContent };
