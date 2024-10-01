import Image from 'next/image';

export default function WhatsAppButton() {
  return (
    <div className="whatsapp-button">
      <a
        href="https://wa.me/+3468117966"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/whatsapp-icon.png"
          alt="WhatsApp"
          width={60}
          height={60}
        />
      </a>
    </div>
  );
}
