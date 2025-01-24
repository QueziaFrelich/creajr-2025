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
        .flatMap((item) => item.tags?.date || [])
        .map((date) => date.split("/")[2])
        .filter(Boolean)
    );
    return Array.from(uniqueYears).sort((a, b) => b - a);
  }, [modal]);

  // Filter by year
  const filteredItems = useMemo(() => {
    if (!selectedYear) return modal?.list?.items;
    return modal?.list?.items?.filter((item) =>
      item.tags?.date?.some((date) => date.includes(selectedYear))
    );
  }, [modal, selectedYear]);

  return (
    <>
      {/* Card section */}
      <div className="max-w-96 min-h-44 p-2 hover:pb-5 text-creajovem-blue-500 dark:text-white bg-creajovem-blue-100  dark:bg-creajovem-blue-900 dark:hover:bg-creajovem-blue-600 rounded-xl space-y-3 group/card transition-all duration-500 ease-in-out hover:opacity-100">
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
                className="rounded-full py-1 px-3 mt-5 bg-creajovem-blue-500/5 dark:bg-white/5 hover:bg-creajovem-green-500 dark:hover:bg-white/20 border-creajovem-blue-500 dark:border-white transition-all"
              />
            )}

            {button?.type === "modal" && (
              <Button_outline
                onClick={onOpen}
                text={button.text}
                icon={<ChevronRightIcon className="size-4" />}
                className="rounded-full py-1 px-3 mt-5 bg-creajovem-blue-500/5 dark:bg-white/5 hover:bg-creajovem-green-500 dark:hover:bg-white/20 border-creajovem-blue-500 dark:border-white transition-all"
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
          <ModalContent className="bg-white dark:bg-creajovem-blue-600 text-creajovem-blue-500 dark:text-white">
            <>
              <ModalHeader className="flex flex-col gap-5 p-4">
                {/* image */}
                <div
                  style={{ backgroundImage: `url('${image}')` }}
                  className="h-52 w-full bg-cover bg-center rounded-t-large"
                ></div>
                <div className="space-y-2">
                  {/* tittle */}
                  <Text_head_2 className="font-semibold text-creajovem-blue-400 dark:text-white">
                    {title}
                  </Text_head_2>

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

              <ModalBody className="p-4 mt-4">
                <div className="flex items-center justify-between">
                  {/* Title list */}
                  <Text_decoration_border>
                    <Text_head_4
                      className={
                        "font-extrabold text-creajovem-blue-400 dark:text-white"
                      }
                    >
                      {modal.list.title}
                    </Text_head_4>
                  </Text_decoration_border>

                  {/* Action list */}
                  {modal.list.download ? (
                    <Button_outline
                      href={modal.list.download}
                      text={"Baixe o material em pdf"}
                      className={
                        "items-center rounded-full py-1 px-3 transition-all md:flex border border-creajovem-blue-100 bg-creajovem-blue-100/30 hover:bg-creajovem-blue-100/10 dark:bg-white/20 dark:hover:bg-white/10 "
                      }
                      target={"_blank"}
                    ></Button_outline>
                  ) : (
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="focus:text-creajovem-blue-600 focus:bg-creajovem-blue-100  items-center rounded-full py-1 px-3 transition-all md:flex border border-creajovem-blue-100 bg-creajovem-blue-100/30 hover:bg-creajovem-blue-100/10 dark:bg-white/20 dark:hover:bg-white/10"
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
                            item.href +
                            (item.company.name
                              ? `/${encodeURI(item.company.name)}`
                              : "")
                          }
                          className="flex flex-col md:flex-row items-start md:items-center justify-between p-2 hover:bg-creajovem-blue-100/30 dark:hover:bg-white/10 rounded-lg transition-all"
                        >
                          {/* image */}
                          <div
                            style={{ backgroundImage: `url('${item.image}')` }}
                            className="h-32 w-full min-w-32 md:max-w-44 bg-cover bg-center rounded-md"
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
                                <div className="flex flex-wrap items-center gap-3">
                                  {item.tags.date.length &&
                                    item.tags.date.map((date, index) => (
                                      <TagBase
                                        key={index}
                                        className="py-1 text-xs border border-creajovem-blue-100 bg-creajovem-blue-100/30 dark:bg-white/20 font-medium"
                                      >
                                        {date}
                                      </TagBase>
                                    ))}

                                  {item.tags.region && (
                                    <TagBase className="py-1 text-xs border border-creajovem-blue-100 bg-creajovem-blue-100/30 hover:bg-creajovem-blue-100/10 dark:bg-white/20 dark:hover:bg-white/10 font-medium">
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
