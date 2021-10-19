import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan) 
    private readonly loanRepository : Repository<Loan>)
  {}
  async create(createloanDto: CreateLoanDto) {
     const entidad = this.loanRepository.create(createloanDto as any);
         
      const data = await this.loanRepository.save(entidad);
  
      return {
        code : "OK",
        message : "Consulta realizada con éxito",
        data
    };
  } 
  

  async findAll() {
    const data = await this.loanRepository.find();

    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };
  }

  
  async findOne(id: number) {
    const data = await this.loanRepository.findOne(id);

    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };
  }

  async update(id: number, updateLoanDto: UpdateLoanDto) {
    const loan = await this.loanRepository.findOne(id);
    if (!loan) throw new NotFoundException("Usuario correcto");
    const editedloan = Object.assign(loan, updateLoanDto)
    const data = await this.loanRepository.save(editedloan);
    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };  
  }

  async remove(id: number) {
    const loan = await this.loanRepository.findOne(id);
      if (!loan) throw new NotFoundException("El usuario no existe");
      const data = this.loanRepository.remove(loan);
      return {
        code : "OK",
        message : "Consulta realizada con éxito",
        data
      };
  }
}
function load(load: any) {
  throw new Error('Function not implemented.');
}

function editedloan(editedloan: any) {
  throw new Error('Function not implemented.');
}

