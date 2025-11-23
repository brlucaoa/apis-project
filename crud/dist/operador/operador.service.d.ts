import { CreateOperadorDto } from './dto/create-operador.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class OperadorService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateOperadorDto): Promise<{
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        id: number;
        createdAt: Date;
    }>;
    findAll(): Prisma.PrismaPromise<({
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
    findOne(id: number): Promise<{
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
    update(id: number, data: Partial<CreateOperadorDto>): Prisma.Prisma__OperadorClient<{
        name: string;
        email: string;
        cpf: string;
        patente: import("@prisma/client").$Enums.Patente;
        status: import("@prisma/client").$Enums.StatusOperador;
        id: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
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
