package com.ikell.solutions.Business;


import com.ikell.solutions.DTO.UserDTO;
import com.ikell.solutions.Entities.Company;
import com.ikell.solutions.Entities.Role;
import com.ikell.solutions.Entities.User;
import com.ikell.solutions.Entities.Worker;
import com.ikell.solutions.Service.CompanyService;
import com.ikell.solutions.Service.UserService;
import com.ikell.solutions.Service.WorkerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import java.util.List;

@Component
public class UserBusiness {

    @Autowired
    private UserService userService;

    @Autowired
    private WorkerService workerService;

    @Autowired
    private CompanyService companyService;

    // ===================== AUTH =====================
    public User authenticate(String email, String password) {
        User user = userService.findByWorkerEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    // ===================== CRUD =====================
    public List<User> findAll() {
        return userService.findAll();
    }

    public User finById(Long id) {
        return userService.getById(id);
    }

    // ===================== CREATE =====================
    public Boolean add(UserDTO dto) {

        // VALIDACIONES CLARAS
        if (dto.getWorkerId() == null || dto.getCompanyId() == null) {
            throw new RuntimeException("workerId and companyId are required");
        }

        Worker worker = workerService.getById(dto.getWorkerId());
        Company company = companyService.getById(dto.getCompanyId());

        if (worker == null) {
            throw new RuntimeException("Worker not found");
        }

        if (company == null) {
            throw new RuntimeException("Company not found");
        }

        User user = new User();
        user.setPassword(dto.getPassword());
        user.setWorker(worker);
        user.setCompany(company);

        // ROLE
        if (dto.getRole() != null) {
            user.setRole(dto.getRole());
        } else {
            user.setRole(Role.USER);
        }

        userService.save(user);
        return true;
    }

    // ===================== DELETE =====================
    public Boolean delete(Long id) {
        User user = userService.getById(id);
        if (user == null) {
            throw new RuntimeException("User not found");
        }
        userService.delete(user);
        return true;
    }
}
