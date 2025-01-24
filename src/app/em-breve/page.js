import Container from "../ui/components/container/container";
import TagBase from "../ui/components/tags/tag-base";
import Text_head_1 from "../ui/components/text/text-head-1";

export default function EmBreve({}) {
  return (
    <Container className="min-h-screen space-y-5 py-10">
      <Text_head_1 className={"text-creajovem-green-500 font-bold"}>
        Em breve
      </Text_head_1>
      <div className="flex flex-wrap gap-5 items-center">
        <TagBase className={"border bg-white/20"}>Março 2025</TagBase>
        <TagBase className={"border bg-white/20"}>
          Regional de Florianópolis
        </TagBase>
      </div>
    </Container>
  );
}
