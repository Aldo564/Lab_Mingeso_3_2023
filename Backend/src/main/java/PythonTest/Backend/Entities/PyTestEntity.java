package PythonTest.Backend.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jetbrains.annotations.NotNull;

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
