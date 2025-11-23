import { PrismaService } from './prisma/prisma.service';
import { CreateOperadorDto } from './operador/dto/create-operador.dto';
import { UpdateMissaoDto } from './missao/dto/update-missao.dto';
export declare class AppService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    updatingOperador(id: number, data: Partial<CreateOperadorDto>): Promise<{
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        id: number;
        createdAt: Date;
    }>;
    updatingMissao(id: number, dto: UpdateMissaoDto): Promise<{
        message: string;
        updated: {
            operadores: {
                name: string;
                email: string;
                cpf: string;
                patente: import("@prisma/client").$Enums.Patente;
                status: import("@prisma/client").$Enums.StatusOperador;
                id: number;
                createdAt: Date;
            }[];
        } & {
            status: import("@prisma/client").$Enums.StatusMissao;
            titulo: string;
            descricao: string | null;
            id: number;
            createdAt: Date;
        };
    }>;
}
