import 'package:TF_SOM_UNMdP/presentacion/pestanas/bmu_pestana.dart';
import 'package:TF_SOM_UNMdP/presentacion/pestanas/clusters_pestana.dart';
import 'package:TF_SOM_UNMdP/presentacion/pestanas/componentes_pestana.dart';
import 'package:TF_SOM_UNMdP/presentacion/pestanas/hits_pestana.dart';
import 'package:TF_SOM_UNMdP/presentacion/pestanas/imagen_nueva_pestana.dart';
import 'package:TF_SOM_UNMdP/presentacion/pestanas/imagen_pestana.dart';
import 'package:TF_SOM_UNMdP/presentacion/pestanas/nuevo_dato_pestana.dart';
import 'package:TF_SOM_UNMdP/presentacion/pestanas/umat_pestana.dart';
import 'package:TF_SOM_UNMdP/presentacion/shared-widgets/dialogs/info_errores_dialog.dart';
import 'package:TF_SOM_UNMdP/providers/datos_provider.dart';
import 'package:TF_SOM_UNMdP/providers/gradiente_provider.dart';
import 'package:flutter/material.dart';
import 'package:hexagon/hexagon.dart';
import 'package:provider/provider.dart';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

class GrillasPage extends StatefulWidget {
  const GrillasPage({super.key});

  @override
  State<GrillasPage> createState() => _GrillasPageState();
}

class _GrillasPageState extends State<GrillasPage>
    with TickerProviderStateMixin {
  bool cargando = false;
  bool mostarGrilla = false;
  String botonAceptar = 'Aceptar';
  int depth = 1;
  List<int> depths = [0, 1, 2, 3, 4];
  HexagonType type = HexagonType.FLAT;
  bool hasControls = true;
  bool showControls = true;
  late TabController tabController;
  late Gradient gradiente;
  //static final clustersController = TextEditingController(text: "10");
  // Map<String, String> dataUdist = {};
  // Map<String, Object> respuesta = {};
  // Map<String, dynamic> mapaRta = {};
  // Map<String, dynamic> parametros = {};
  // Map<String, String> mapaRtaUmat = {};
  // late List<List<int>> mapaRtaClusters;
  // Map<String, String> dataComponente = {};
  // late List<String> nombresColumnas = [];
  // late List<List<double>> codebook;

  late double _width, _height;

  Map<int, int> hitsMap = {};
  String title = "";
  late int filas, columnas;
  @override
  void initState() {
    super.initState();
    tabController = TabController(initialIndex: 0, length: 8, vsync: this);
    tabController.addListener(_onTabChange);
    final gradienteProvider = context.read<GradienteProvider>();
    gradiente = gradienteProvider.gradienteElegido();
    // Check if the page is being reloaded
    if (html.window.localStorage['isReloading'] == 'true') {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        // Navigate to HomePage after the initial build
        Navigator.pushReplacementNamed(context, '/');
      });
      // Clear the flag
      html.window.localStorage.remove('isReloading');
    }

    // Set a flag indicating that the page is about to be reloaded
    html.window.onBeforeUnload.listen((event) {
      html.window.localStorage['isReloading'] = 'true';
    });
  }

  void _onTabChange() {
    if (tabController.index == 0) {
      setState(() {
        hasControls = true;
      });
    } else {
      setState(() {
        hasControls = false;
      });
    }
  }

  String selectedComponente = '';
  @override
  Widget build(BuildContext context) {
    // mapaRta =
    //     ModalRoute.of(context)!.settings.arguments as Map<String, dynamic>;

    // respuesta =
    //     ModalRoute.of(context)!.settings.arguments as Map<String, Object>;

    // mapaRta = respuesta["respuestaBMU"] as Map<String, dynamic>;

    // mapaRtaUmat = respuesta["respuestaUmat"] as Map<String, String>;

    // parametros = respuesta["parametros"] as Map<String, dynamic>;

    // hitsMap = respuesta["respuestaHits"] as Map<int, int>;

    // codebook = respuesta["codebook"] as List<List<double>>;

    // nombresColumnas = respuesta["nombrescolumnas"] as List<String>;

    // filas = int.parse(parametros["filas"]);
    // columnas = int.parse(parametros["columnas"]);
    // dataUdist = mapaRta["Udist"]!;

    final datosProvider = context.read<DatosProvider>();

    _width = MediaQuery.of(context).size.width;
    _height = MediaQuery.of(context).size.height;

    return Scaffold(
        appBar: AppBar(
          actions: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: ElevatedButton(
                child: Icon(Icons.info),
                onPressed: () {
                  showDialog<void>(
                    context: context,
                    builder: (BuildContext context) {
                      return InfoErroresDialog(
                        widthPantalla: _width,
                        heightPantalla: _height,
                      );
                    },
                  );
                },
              ),
            ),
          ],
          title: const Text('Grillas'),
        ),
        body: DefaultTabController(
          length: 8,
          initialIndex: 0,
          child: Scaffold(
            appBar: AppBar(
              bottom: TabBar(
                controller: tabController,
                tabs: const [
                  Tab(text: 'Mapa'),
                  Tab(text: 'Umat+'),
                  Tab(text: 'Componentes'),
                  Tab(text: 'Hits'),
                  Tab(text: 'Clustering'),
                  Tab(text: 'Nuevo dato'),
                  Tab(text: 'Imagen Datos Train'),
                  Tab(text: 'Imagen Nueva'),
                ],
              ),
              toolbarHeight: 0.0,
            ),
            body: TabBarView(
              controller: tabController,
              physics: const NeverScrollableScrollPhysics(),
              children: [
                BmuPestana(
                  gradiente: gradiente,
                ),
                UmatPestana(gradiente: gradiente),
                ComponentesPestana(
                  mapaRta: datosProvider.resultadoEntrenamiento.mapaRta,
                  codebook: datosProvider.resultadoEntrenamiento.codebook,
                  nombrecolumnas:
                      datosProvider.resultadoEntrenamiento.nombresColumnas,
                  filas: datosProvider.resultadoEntrenamiento.filas,
                  columnas: datosProvider.resultadoEntrenamiento.columnas,
                  gradiente: gradiente,
                ),
                HitsPestana(gradiente: gradiente),
                ClustersPestana(
                  gradiente: gradiente,
                ),
                NuevoDatoPestana(gradiente: gradiente),
                //ImagenPestana(gradiente: gradiente),
                ImagenNuevaPestana(gradiente: gradiente, usarDatosTrain: true,),
                ImagenNuevaPestana(gradiente: gradiente, usarDatosTrain: false,)
              ],
            ),
          ),
        ));
  }
}
