import { OperadorService } from './operador.service';
import { CreateOperadorDto } from './dto/create-operador.dto';
import { UpdateOperadorDto } from './dto/update-operador.dto';
export declare class OperadorController {
    private readonly operadorService;
    constructor(operadorService: OperadorService);
    create(dto: CreateOperadorDto): Promise<{
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        id: number;
        createdAt: Date;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        missoes: {
            status: import("@prisma/client").$Enums.StatusMissao;
            titulo: string;
            descricao: string | null;
            id: number;
            createdAt: Date;
        }[];
    } & {
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        id: number;
        createdAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        missoes: {
            status: import("@prisma/client").$Enums.StatusMissao;
            titulo: string;
            descricao: string | null;
            id: number;
            createdAt: Date;
        }[];
    } & {
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        id: number;
        createdAt: Date;
    }>;
    update(id: number, dto: UpdateOperadorDto): import("@prisma/client").Prisma.Prisma__OperadorClient<{
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        id: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): Promise<{
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        id: number;
        createdAt: Date;
    }>;
}
