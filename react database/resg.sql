declare
    s_code emp.emp_code%type;
    s_basic emp.emp_basic%type;
    s_month control1.c_month%type;
    s_year control1.c_year%type;
    s_cons emp.emp_cons_res_flag%type;
    s_stop salary.e_sal_emp_stop%type;
    s_add_pay salary.e_sal_addl_pay%type;
    s_da salary.e_sal_da%type;
    s_hra salary.e_sal_hra%type;
    s_gross salary.e_sal_gross%type;
    s_lic salary.e_sal_lic_ded%type;
    s_advance salary.e_sal_advance_ded%type;
    s_transport salary.e_sal_transport_ded%type;
    s_esi salary.e_sal_esi_ded%type;
    s_epf salary.e_sal_epf_ded%type;
    s_fpf salary.e_sal_fpf_ded%type;
    s_pf salary.e_sal_pf_tax%type;
    s_other salary.e_sal_other_ded%type;
    s_gross_ded salary.e_sal_gross_ded%type;
    s_net salary.e_sal_net_pay%type;
    s_name emp.emp_name%type;
    
    gross_ded float;
    pf float;
    

    cursor employee is
        select emp.emp_code,emp.emp_basic,emp.emp_cons_res_flag,emp_name
        from emp where emp.emp_resignation_date is null;

begin
    select c_month, c_year
    into s_month, s_year
    from control1;
    

 dbms_output.put_line(s_month||' : '||s_year);
 open employee;
    loop
          fetch employee into s_code,s_basic,s_cons,s_name;
           exit when employee%notfound;
           dbms_output.put_line(s_code);
           if s_cons='R' or s_cons='r' then
           s_stop :='Y';
           s_add_pay := 1000.00;
           s_da := (s_basic*10)/100;
           pf := s_basic + s_da;
           s_hra := (s_basic*11)/100;
           s_transport := 1000.00;
           s_gross := s_add_pay + s_da + s_hra+s_basic+s_transport;
           
           s_lic := 100.00;
           s_advance := 1500.00;
           
           s_esi := (0.75/100)*s_gross;
           s_pf := (pf * 12)/100;
           s_epf := (pf * 10)/100;
           s_fpf := s_pf-s_epf;
           s_other :=0.0;
           s_gross_ded := s_lic+s_advance+s_pf+s_epf+s_fpf+s_other+s_esi;
           s_net := s_gross - s_gross_ded;
           
            insert into salary(e_sal_month,e_sal_year,e_sal_emp_code,e_sal_emp_basic,e_sal_emp_stop,e_sal_addl_pay,e_sal_da,e_sal_hra,e_sal_gross,e_sal_lic_ded,e_sal_advance_ded,e_sal_transport_ded,e_sal_esi_ded,e_sal_epf_ded,e_sal_fpf_ded,e_sal_pf_tax,e_sal_other_ded,e_sal_gross_ded,e_sal_net_pay,e_sal_emp_name)
                        values(s_month,s_year,s_code,s_basic,s_stop,s_add_pay,s_da,s_hra,s_gross,s_lic,s_advance,s_transport,s_esi,s_epf,s_fpf,s_pf,s_other,s_gross_ded,s_net,s_name);
           else
           s_stop :='Y';
           s_add_pay := 0;
           s_da := 0;
           pf := 0;
           s_hra := 0;
           s_transport := 0;
           s_gross := s_add_pay + s_da + s_hra+s_basic+s_transport;
           
           s_lic := 0;
           s_advance := 0;
           
           s_esi := (0.75/100)*s_gross;
           s_pf := (pf * 12)/100;
           s_epf := (pf * 10)/100;
           s_fpf := s_pf-s_epf;
           s_other :=0.0;
           s_gross_ded := s_lic+s_advance+s_pf+s_epf+s_fpf+s_other+s_esi;
           s_net := s_gross - s_gross_ded;
           
            insert into salary(e_sal_month,e_sal_year,e_sal_emp_code,e_sal_emp_basic,e_sal_emp_stop,e_sal_addl_pay,e_sal_da,e_sal_hra,e_sal_gross,e_sal_lic_ded,e_sal_advance_ded,e_sal_transport_ded,e_sal_esi_ded,e_sal_epf_ded,e_sal_fpf_ded,e_sal_pf_tax,e_sal_other_ded,e_sal_gross_ded,e_sal_net_pay,e_sal_emp_name)
                        values(s_month,s_year,s_code,s_basic,s_stop,s_add_pay,s_da,s_hra,s_gross,s_lic,s_advance,s_transport,s_esi,s_epf,s_fpf,s_pf,s_other,s_gross_ded,s_net,s_name);

           end if;

    end loop;
close employee;
        
end;
/