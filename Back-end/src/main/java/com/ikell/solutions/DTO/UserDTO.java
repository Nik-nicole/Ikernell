package com.ikell.solutions.DTO;

import com.ikell.solutions.Entities.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Long id;
    private String password;

    // relaciones
    private Long workerId;
    private Long companyId;

    // OPCIONAL
    private Role role;
}
