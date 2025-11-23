import { PrismaService } from 'src/prisma/prisma.service';
import { PostMissaoDto } from './dto/create-missao.dto';
import { UpdateMissaoDto } from './dto/update-missao.dto';
export declare class MissaoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: PostMissaoDto): Promise<{
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
    }>;
    addOperador(missaoId: number, operadorId: number): Promise<{
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
    }>;
    findAll(): Promise<({
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
    })[]>;
    findOne(id: number): Promise<{
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
    }>;
    update(id: number, dto: UpdateMissaoDto): Promise<({
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
    }) | undefined>;
    remove(id: number): Promise<{
        status: import("@prisma/client").$Enums.StatusMissao;
        titulo: string;
        descricao: string | null;
        id: number;
        createdAt: Date;
    }>;
}
