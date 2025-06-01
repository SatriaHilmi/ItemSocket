import { useEffect, useState, useRef } from "react";

interface DynamicProps {
    src: string;
    alt?: string;
    className?: string;
}

export const Dynamic: React.FC<DynamicProps> = ({ src, alt, className = "" }) => {
    const ref = useRef<HTMLImageElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of the image is visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <img
            ref={ref}
            src={src} // Load image only when visible
            alt={alt}
            className={`transition-all duration-500 ease-linear transform ${className} ${visible ? 'opacity-100 rotate-45' : '-rotate-12 opacity-0 -translate-x-6'}`}
            loading="lazy" style={{ zIndex: 1000 }} // Lazy load the image
        />
    )
}