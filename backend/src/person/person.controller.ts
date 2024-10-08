import { Body, Controller, Get, Param ,Post,Patch, Delete, Query} from '@nestjs/common';

@Controller('person')
export class PersonController {
    
       @Get() //GET/users
       findAll(@Query('role')role?:'INTERN'|'ENGINEER'|'ADMIN'){
        return[]
       }

       @Get('id')  //GET/users/id
       findOne(@Param('id')id:String){
         return {id}
       }

       @Post()  //POST/users
       create (@Body() user :{}){
         return user 
       }

       @Patch(':id')  //PATCH/users/id
       update (@Param('id')id:string,@Body()userUpdate:{}){
        return {id,...userUpdate}
       }

       @Delete(':id')  //DELETE/users/id
       delete (@Param('id')id:string){
        return {id}
       }
}
