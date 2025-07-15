'use client'

import Container from "../../components/container/container";
import Number_count from "../../components/number-count/number-count";
import Text_display_3 from "../../components/text/text-display-3";

export default function Section_numbers() {
    return (
        <section
            className="py-20 flex flex-col items-center justify-center bg-cover bg-center text-green-900"
            style={{
                backgroundImage: "url('/banners/bg-number.png')",
            }}
        >
            {/* Título opcional, remova se quiser algo mais limpo */}
            {/* <Text_display_3 className="text-center mb-10">Nossa presença</Text_display_3> */}

            <Container className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                <Number_count before_number="+" number={30} after_number="k" title="Acadêmicos passaram por aqui" animate={true} />
                <Number_count before_number="+" number={2} after_number="k" title="Membros ativos no programa" animate={true} />
                <Number_count before_number="+" number={300} title="Cursos participantes" animate={true} />
                <Number_count before_number="+" number={50} title="Instituições de ensino" animate={true} />
            </Container>
        </section>
    );
}
