package PythonTest.Backend.Entities;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "pytest")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PyTestEntity {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID_PYTEST;

    private String pregunta;
    private String respuesta;
    private Integer dificultad;

}
