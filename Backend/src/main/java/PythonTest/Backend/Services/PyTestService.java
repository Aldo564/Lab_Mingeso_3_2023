package PythonTest.Backend.Services;

import PythonTest.Backend.Entities.PyTestEntity;
import PythonTest.Backend.Repositories.PyTestRepository;
import lombok.Generated;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Optional;

@Service
public class PyTestService {

    PyTestRepository pyTestRepository;

    public void guardarDataDB(PyTestEntity data)
    {
        pyTestRepository.save(data);
    }

    public void guardarData(String pregunta, String respuesta, Integer dif)
    {
        PyTestEntity newData = new PyTestEntity();
        newData.setPregunta(pregunta);
        newData.setRespuesta(respuesta);
        newData.setDificultad(dif);
        guardarDataDB(newData);
    }

    public Integer verificarRespuestas(ArrayList<Integer> id_pytest,ArrayList<String> respuestas)
    {
        ArrayList<Boolean> revision = new ArrayList<>();
        for (int i = 0; i < 4; i++){
            PyTestEntity pregunta = pyTestRepository.findById(id_pytest.get(i));
            String respuesta = respuestas.get(i);
            if (pregunta != null)
            {
                revision.add(pregunta.getRespuesta().equals(respuesta));
            }
            else{
                System.out.println("Pregunta no encontrada");
            }

        }

        int puntaje = 0;
        for (Boolean aBoolean : revision) {
            if (aBoolean) {
                puntaje += 1;
            }
        }

        return puntaje;
    }
}
