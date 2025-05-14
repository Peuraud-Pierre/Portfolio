import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./Contact";

export const Contact = () => {
  return (
    <Section classname="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contacte me </Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Vous pouvez me contactez à tout instant via:
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactCard
          Image="https://i.pinimg.com/736x/57/6c/d5/576cd5147cc1cb750df33ef6af22e25f.jpg"
          Medium_image="data:image/png;base64,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"
          Name="Peuraudpierre9@gmail"
          Description=""
          Url="mailto:contacte"
        />
        <ContactCard
          Image="https://i.pinimg.com/736x/57/6c/d5/576cd5147cc1cb750df33ef6af22e25f.jpg"
          Medium_image="https://png.pngtree.com/png-clipart/20191120/original/pngtree-phone-icon-png-image_5065646.jpg"
          Name="06 67 84 54 01"
          Description=""
          Url="tel:+3367845401"
        />
      </div>
    </Section>
  );
};
