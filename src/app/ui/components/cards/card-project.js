"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Text_head_5 from "../text/text-head-5";
import Text_body_sm from "../text/text-body-sm";
import Button_outline from "../buttons/button_outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Text_head_2 from "../text/text-head-2";
import TagBase from "../tags/tag-base";
import Text_body_base from "../text/text-body-base";
import Text_head_4 from "../text/text-head-4";
import Text_decoration_border from "../text/decoration/text-decoration-border";
import Link from "next/link";
import { useMemo, useState } from "react";
import DataNotFound from "../data-states/data-not-found";

export default function CardProject({
  title,
  category,
  summary,
  image,
  button,
  modal,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedYear, setSelectedYear] = useState("");

  // Extract years from items
  const years = useMemo(() => {
    if (!modal?.list?.items) return [];
    const uniqueYears = new Set(
      modal.list.items
        .map((item) => item.tags?.date?.split("/")[2])
        .filter(Boolean)
    );
    return Array.from(uniqueYears).sort((a, b) => b - a);
  }, [modal]);

  // Filter by year
  const filteredItems = useMemo(() => {
    if (!selectedYear) return modal?.list?.items;
    return modal?.list?.items?.filter((item) =>
      item.tags?.date?.includes(selectedYear)
    );
  }, [modal, selectedYear]);

  return (
    <>
      {/* Card section */}
      <div className="max-w-96 min-h-44 p-2 bg-creajovem-blue-100 dark:bg-creajovem-blue-900 dark:hover:bg-creajovem-blue-600 rounded-xl space-y-3 group/card transition-all duration-500 ease-in-out hover:opacity-100">
        <div
          style={{ backgroundImage: `url('${image}')` }}
          className="h-24 w-full bg-cover bg-center rounded-t-md"
        ></div>
        <Text_head_5 className="font-semibold">{title}</Text_head_5>
        <div className="md:opacity-0 md:max-h-0 overflow-hidden md:group-hover/card:opacity-100 md:group-hover/card:max-h-96 transition-all duration-500 ease-in-out">
          <div>
            <Text_body_sm>{summary}</Text_body_sm>

            {/* Render button */}
            {button?.type === "link" && (
              <Button_outline
                href={button.href}
                text={button.text}
                icon={<ChevronRightIcon className="size-4" />}
                className="rounded-full py-1 px-3 mt-5"
              />
            )}

            {button?.type === "modal" && (
              <Button_outline
                onClick={onOpen}
                text={button.text}
                icon={<ChevronRightIcon className="size-4" />}
                className="rounded-full py-1 px-3 mt-5"
              />
            )}
          </div>
        </div>
      </div>

      {/* Modal section */}
      {modal && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="4xl"
          radius="lg"
          backdrop={"blur"}
          scrollBehavior="outside"
          classNames={{
            closeButton:
              "bg-white hover:bg-creajovem-green-500 text-creajovem-blue-900 transition-all p-2 rounded-full",
          }}
        >
          <ModalContent className="bg-creajovem-blue-600">
            <>
              <ModalHeader className="flex flex-col gap-5 p-2">
                {/* image */}
                <div
                  style={{ backgroundImage: `url('${image}')` }}
                  className="h-52 w-full bg-cover bg-center rounded-t-large"
                ></div>
                <div className="space-y-2">
                  {/* tittle */}
                  <Text_head_2 className="font-semibold">{title}</Text_head_2>

                  {/* tag */}
                  <TagBase
                    className={
                      "text-sm border border-creajovem-green-500 text-creajovem-green-500 font-normal"
                    }
                  >
                    {category}
                  </TagBase>
                </div>

                <Text_body_base className={"font-normal"}>
                  {modal.description}
                </Text_body_base>
              </ModalHeader>

              <ModalBody className="p-2 mt-4">
                <div className="flex items-center justify-between">
                  {/* Title list */}
                  <Text_decoration_border>
                    <Text_head_4 className={"font-extrabold"}>
                      {modal.list.title}
                    </Text_head_4>
                  </Text_decoration_border>

                  {/* Action list */}
                  {modal.list.download ? (
                    <Button_outline
                      href={modal.list.download}
                      text={"Baixe o material em pdf"}
                      className={
                        "items-center rounded-full py-1 px-3 transition-all md:flex bg-white/20 hover:bg-white/10"
                      }
                      target={"_blank"}
                    ></Button_outline>
                  ) : (
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="items-center rounded-full py-1 px-3 transition-all md:flex bg-white/20 hover:bg-white/10"
                    >
                      <option value="">Todos os anos</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                {/* List */}
                {filteredItems.length === 0 ? (
                  <DataNotFound />
                ) : (
                  filteredItems && (
                    <div className="space-y-3">
                      {filteredItems.map((item, index) => (
                        <Link
                          key={index}
                          href={
                            item.href === "/visitas-tecnicas"
                              ? `${item.href}/${encodeURI(item.company.name)}`
                              : item.href
                          }
                          className="flex items-start md:items-center justify-between p-2 hover:bg-white/10 rounded-lg transition-all"
                        >
                          {/* image */}
                          <div
                            style={{ backgroundImage: `url('${item.image}')` }}
                            className="h-32 w-full min-w-32 max-w-44 bg-cover bg-center rounded-md"
                          ></div>

                          {/* title, tags and description */}
                          <div className="flex flex-col p-5">
                            {/* Title and tags */}
                            <div className="space-y-3">
                              <Text_head_5
                                className={"font-bold text-creajovem-green-500"}
                              >
                                {item.title}
                              </Text_head_5>

                              {/* tags */}
                              {item.tags && (
                                <div className="flex items-center gap-3">
                                  {item.tags.date && (
                                    <TagBase className="py-1 text-xs border bg-white/20 border-white text-white font-medium">
                                      {item.tags.date}
                                    </TagBase>
                                  )}
                                  {item.tags.region && (
                                    <TagBase className="py-1 text-xs border bg-white/20 border-white text-white font-medium">
                                      {item.tags.region}
                                    </TagBase>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Description */}
                            <Text_body_sm className={item.tags && "mt-2"}>
                              {item.description}
                            </Text_body_sm>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )
                )}
              </ModalBody>
            </>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
