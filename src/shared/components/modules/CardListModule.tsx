import Image, { StaticImageData } from "next/image";

interface CardUserProps {
    imageSrc: StaticImageData;
}

export default function CardListModule({ imageSrc }: CardUserProps) {
    return (
        <div className="border">
            <Image src={imageSrc}
            alt="User Image" 
            width={60} height={60} />
        </div>
    );
}