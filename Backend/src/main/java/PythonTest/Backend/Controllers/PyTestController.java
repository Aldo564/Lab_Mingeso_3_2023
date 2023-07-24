package PythonTest.Backend.Controllers;

import PythonTest.Backend.Entities.PyTestEntity;
import PythonTest.Backend.Repositories.PyTestRepository;
import PythonTest.Backend.Services.PyTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@RestController
@RequestMapping("/pytest")
public class PyTestController {

    @Autowired
    PyTestService pyTestService;

    @Autowired
    PyTestRepository pyTestRepository;

    @GetMapping("/preguntas")
    public ResponseEntity<ArrayList<PyTestEntity>> obtenerPreguntas()
    {
        ArrayList<PyTestEntity> preguntas = pyTestRepository.getAll();
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @GetMapping("/preguntas/{dif}")
    public ResponseEntity<ArrayList<PyTestEntity>> obtenerPreguntasDif(@PathVariable("dif") Integer dif)
    {
        ArrayList<PyTestEntity> preguntas = pyTestRepository.findByDif(dif);
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @GetMapping("/pregunta/{id}")
    public ResponseEntity<PyTestEntity> obtenerPregunta(@PathVariable("id") Integer id)
    {
        PyTestEntity pregunta = pyTestRepository.findById(id);
        if(pregunta == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(pregunta);
    }

    @PostMapping("/pregunta")
    public ResponseEntity<Boolean> guardarPregunta(@RequestBody PyTestEntity pregunta)
    {
        pyTestRepository.save(pregunta);
        return ResponseEntity.ok(true);
    }

}
